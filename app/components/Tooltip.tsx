import { renderToString } from "react-dom/server";
import ListByoungwon from "./ListByoungwon";
import { HospitalReviewKey } from "@/infra/hospital-review";

const Tooltip = (props: {
  // Todo: children 으로 빼기
  name: string;
  address: string;
  dummyAccessibility: "accessible" | "inaccessible" | "unknown";
  reviewKeys?: HospitalReviewKey[];
  isOpen: boolean | null;
}) => {
  return (
    <div className="tooltip inline-block rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-900 shadow-sm">
      <ListByoungwon {...props} />
    </div>
  );
};

const tooltip = (props: {
  name: string;
  address: string;
  dummyAccessibility: "accessible" | "inaccessible" | "unknown";
  isOpen: boolean | null;
}) => renderToString(<Tooltip {...props} />);

export default tooltip;
