import { AirbnbLogo } from "../icons/AirbnbLogo";
import { LogoNewSmall } from "../icons/LogoNewSmall";

export function HeaderLayout() {
  return (
    <div className="flex  bg-white justify-between conatiner mx-auto p-10">
      <a href="/">
        <img
          className="w-[50px] h-[50px]"
          src="/images/LogoNewList.png"
          alt=""
        />
      </a>
      <button className="border w-[60px] px-[16px] h-10 flex justify-center items-center rounded-3xl">
        Exit
      </button>
    </div>
  );
}
