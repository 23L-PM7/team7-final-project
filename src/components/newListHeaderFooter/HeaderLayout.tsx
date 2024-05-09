import { AirbnbLogo } from "../icons/AirbnbLogo";

export function HeaderLayout() {
  return (
    <div className="relative">
      <div className="flex fixed left-0 right-0 top-0 border bg-white justify-between conatiner mx-auto p-10">
        <AirbnbLogo />
        <button className="border w-[60px] px-[16px] h-10 flex justify-center items-center rounded-3xl">
          Exit
        </button>
      </div>
    </div>
  );
}
