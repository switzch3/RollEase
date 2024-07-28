import {
  useInitMap,
  useMoveCurrentPosition,
  useSpotByoungwons,
} from "@/app/hooks/geo";
import SVGCurrentSpot from "@/app/components/SVGCurrentSpot";

const REF_ID = "map";

export default function Main() {
  const [naverMap] = useInitMap(REF_ID);
  const moveCurrent = useMoveCurrentPosition(naverMap);
  useSpotByoungwons(naverMap);

  return (
    <div className="relative h-full w-full">
      <div id={REF_ID} className="h-full w-full outline-none"></div>
      <button
        className="absolute bottom-7 right-7"
        onClick={() => moveCurrent()}
      >
        <SVGCurrentSpot />
      </button>
    </div>
  );
}
