"use client";

import { useNextButtonClickable } from "@/components/newListHeaderFooter/ProgressFooter";
import { useEffect } from "react";

export default function StandOut() {
  const { setNextButtonClickable }: any = useNextButtonClickable();

  useEffect(() => {
    setNextButtonClickable(true);
  }, []);

  return (
    <div className="container mx-auto pt-20 animate-fade-up">
      <div className=" flex gap-40 p-10  justify-center items-center">
        <div className=" mt-64 ">
          <p className="text-lg font-medium mb-[16px]">Step 2</p>
          <h1 className="text-5xl  font-medium mb-[24px]">
            Make your place stand out
          </h1>
          <p className="text-lg font-light w-96">
            In this step, you’ll add some of the amenities your place offers,
            plus 5 or more photos. Then, you’ll create a title and the
            description.
          </p>
        </div>
        <img
          className="w-[700px] mt-16 h-[670px]"
          src="/images/CreateListPhotos/StandOut.png"
          alt=""
        />
      </div>
    </div>
  );
}
