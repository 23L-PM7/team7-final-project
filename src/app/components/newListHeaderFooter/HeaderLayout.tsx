import { useEffect, useState } from "react";
import { AirbnbLogo } from "../icons/AirbnbLogo";

export function HeaderLayout() {
  //   const [type, setType] = useState(false);

  //   const ScrollHeader = () => {
  //     if (window.scrollY >= 20) {
  //       setType(true);
  //     } else {
  //       setType(false);
  //     }
  //   };

  //   useEffect(()=>{
  //     window.addEventListener('scroll',setType)
  // return (){
  //   window.addEventListener('scroll',setType)
  // }
  //   },[])
  return (
    <div className="relative">
      <div className="flex fixed top-0 left-0 right-0 border bg-white justify-between conatiner mx-auto p-10">
        <AirbnbLogo />
        <button className="border w-[60px] px-[16px] h-10 flex justify-center items-center rounded-3xl">
          Exit
        </button>
      </div>
    </div>
  );
}
