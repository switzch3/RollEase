import { useEffect } from "react";
import { stylingCluster } from "@/lib/cluster/styling";
import { getByoungwon } from "@/infra/db/byoungwons";
// Note: hooks 에서 컴포넌트 참조
import tooltip from "@/app/components/Tooltip";

// marker-clustering.d.ts
declare global {
  let N: typeof naver.maps;
}

export type ClusterData = { name: string; value: number };

export function useSpotByoungwons(naverMap: naver.maps.Map | undefined) {
  useEffect(() => {
    if (!naverMap) return;

    const listeners: naver.maps.MapEventListener[] = [];
    const infowindow = new naver.maps.InfoWindow({
      content: "",
      maxWidth: 140,
      backgroundColor: "transparent",
      borderColor: "none",
      anchorSize: new naver.maps.Size(20, 10),
    });

    naver.maps.Event.addListener(naverMap, "click", function (e) {
      infowindow.close();
    });
    // Note: naver map 로딩이 되고 나서 로드해야기 때문이다.
    import("@/infra/marker-clustering").then(({ MarkerClustering }) => {
      //   getPharmacies().then((pharmacies) => {
      const markers: naver.maps.Marker[] = [];
      const svgMarker = {
        content:
          '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold"><svg width="100%" height="100%" viewBox="-20, -20, 40, 40"></svg></div>',
        size: new N.Size(40, 40),
        anchor: new N.Point(20, 20),
      };
      // Todo: slice 변경
      getByoungwon().map((byoungwon) => {
        const { dummyAccessibility, dutyaddr, dutyname, isOpen } = byoungwon;

        const { wgs84lat, wgs84lon } = byoungwon;
        const location = new naver.maps.LatLng(
          parseFloat(wgs84lat),
          parseFloat(wgs84lon),
        );
        const markerOptions = {
          position: location,
          map: naverMap,
          icon: {
            url: `/${dummyAccessibility}.svg`,
            size: new naver.maps.Size(28, 28),
            scaledSize: new naver.maps.Size(28, 28),
          },
        };
        const marker = new naver.maps.Marker(markerOptions);

        const listener = naver.maps.Event.addListener(
          marker,
          "click",
          function (e) {
            infowindow.setContent(
              tooltip({
                name: dutyname,
                address: dutyaddr,
                isOpen,
                dummyAccessibility,
              }),
            );
            infowindow.open(naverMap, marker);
          },
        );

        listeners.push(listener);
        markers.push(marker);
      });
      //
      const markerClustering = new MarkerClustering({
        minClusterSize: 2,
        maxZoom: 17,
        map: naverMap,
        markers,
        disableClickZoom: false,
        gridSize: 120,
        icons: [svgMarker],
        indexGenerator: [1],
      });
      (markerClustering as any).setStylingFunction(
        (clusterMarker: any, count: number) => {
          stylingCluster(markerClustering, clusterMarker, count);
        },
      );
      //   });
    });

    return () => {
      naver.maps.Event.removeListener(listeners);
    };
  }, [naverMap]);
}
