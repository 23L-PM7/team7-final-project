import { AirbnbLogo } from "../icons/AirbnbLogo";

export function HeaderLayout() {
  return (
    <div className="flex justify-between conatiner mx-auto p-10">
      <AirbnbLogo />
      <button className="border w-[60px] px-[16px] h-10 flex justify-center items-center rounded-3xl">
        Exit
      </button>
    </div>
  );
}
