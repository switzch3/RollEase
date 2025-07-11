import { useEffect, useState } from "react";
import { useScript } from "usehooks-ts";
import { NAMHAN } from "@/lib/Namhan";
import { YONGSAN } from "@/lib/Yongsan";

const NCP_CLIENT_ID = "oxziiq8o6e";

export function useInitMap(REF_ID: string) {
  const [naverMap, setNaverMap] = useState<naver.maps.Map>();
  const [currentBounds, setCurrentBounds] = useState<naver.maps.LatLngBounds>();
  const statusMap = useScript(
    `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NCP_CLIENT_ID}`,
    {},
  );
  useEffect(
    function loadNAVERMap() {
      let boundListener: naver.maps.MapEventListener;
      if (statusMap === "ready") {
        const defaultPosition = new naver.maps.LatLng(37.532527, 126.99049); //용산구청
        // const defaultPosition = new naver.maps.LatLng(37.4963764, 127.0320237); //역삼 푸른솔 도서관

        const mapOptions = {
          center: defaultPosition,
          // minZoom: 13, // 읍면동 레벨
          // maxBounds: seochoGangnam, // 네이버 맵의 줌레벨
          zoom: 15,
        };

        const map = new naver.maps.Map(REF_ID);
        map.setOptions(mapOptions);

        const polygon = new naver.maps.Polygon({
          map: map,
          paths: [
            NAMHAN.map(([lat, lng]) => new naver.maps.LatLng(lat, lng)),
            YONGSAN.map(([lat, lng]) => new naver.maps.LatLng(lat, lng)),
          ],
          fillColor: "#f00",
          fillOpacity: 0.2,
          strokeColor: "none",
        });

        boundListener = naver.maps.Event.addListener(
          map,
          "bounds_changed",
          function (bounds) {
            setCurrentBounds(bounds);
          },
        );
        setNaverMap(map);
      }
      return () => {
        if (statusMap === "ready") {
          naverMap?.destroy();
          naver.maps.Event.removeListener(boundListener);
          setNaverMap(undefined);
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [statusMap],
  );
  return [naverMap, currentBounds] as const;
}
