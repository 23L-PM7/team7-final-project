import { AirbnbLogo } from "../icons/AirbnbLogo";

export function ProgressHeader() {
  return (
    <div className="relative">
      <div className="flex z-30 fixed left-0 right-0 top-0 border bg-white justify-between conatiner mx-auto p-10">
        <AirbnbLogo />
        <div className="flex gap-3">
          <button className="border w-[100px] px-[16px] h-10 flex justify-center items-center rounded-3xl">
            Questions?
          </button>
          <button className="border w-[120px] px-[16px] h-10 flex justify-center items-center rounded-3xl">
            Save & exit
          </button>
        </div>
      </div>
    </div>
  );
}
