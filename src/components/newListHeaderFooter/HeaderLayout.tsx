import { AirbnbLogo } from "../icons/AirbnbLogo";

export function HeaderLayout() {
  return (
    <div className="flex  bg-white justify-between conatiner mx-auto p-10">
      <a href="https://ui-37d4hseql-seven3.vercel.app/">
        <AirbnbLogo />
      </a>
      <button className="border w-[60px] px-[16px] h-10 flex justify-center items-center rounded-3xl">
        Exit
      </button>
    </div>
  );
}
