import { type ChangeEvent, useEffect, useState } from "react";
import SVGSearch from "@/app/components/SVGSearch";
import ListByoungwon from "@/app/components/ListByoungwon";
import { getByoungwon } from "@/infra/db/byoungwons";
import type { MedicalFacility } from "@/infra/types/ByoungWon";

export default function Search() {
  const [byoungwons, setByoungwons] = useState<
    (MedicalFacility & { isOpen: boolean | null })[]
  >([]);
  const [allByoungwon, setAllByoungwon] = useState<
    (MedicalFacility & { isOpen: boolean | null })[]
  >([]);
  //
  useEffect(() => {
    const byoungwon = getByoungwon();
    setByoungwons(byoungwon);
    setAllByoungwon(byoungwon);
  }, []);

  const handleChange = (v: ChangeEvent<HTMLInputElement>) => {
    const value = v.target.value;
    if (value) {
      const searchWord = new RegExp(value, "g");
      const result = allByoungwon.filter((p) => searchWord.test(p.dutyname));
      setByoungwons(result);
    } else {
      setByoungwons(allByoungwon);
    }
  };

  // const handleClick = () => {}

  return (
    <div className="h-full overflow-scroll">
      <div className="sticky top-0 border-b border-gray-300/50 bg-white p-4">
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SVGSearch className="h-5 w-5" />
          </span>
          <input
            className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="병원 이름 검색"
            type="text"
            name="search"
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="">
        <ul role="list" className="divide-y divide-slate-200 p-4">
          {byoungwons.map(
            ({
              dutyname,
              dutyaddr,
              dummyAccessibility,
              isOpen,
              dutytel1,
              reviewKeys,
            }) => (
              <ListByoungwon
                key={dutytel1}
                name={dutyname}
                address={dutyaddr}
                dummyAccessibility={dummyAccessibility}
                isOpen={isOpen}
                reviewKeys={reviewKeys}
              />
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
