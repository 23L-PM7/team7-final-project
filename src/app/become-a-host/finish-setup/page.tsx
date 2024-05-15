"use client";

import { useNextButtonClickable } from "@/components/newListHeaderFooter/ProgressFooter";
import { useEffect } from "react";

export default function FinishSetUp() {
  const { setNextButtonClickable }: any = useNextButtonClickable();

  useEffect(() => {
    setNextButtonClickable(true);
  }, []);
  return (
    <div className="container mx-auto pt-32">
      <div className=" flex gap-40 p-10">
        <div className=" mt-64 ">
          <p className="text-lg font-medium mb-[16px]">Step 3</p>
          <h1 className="text-5xl font-medium mb-[24px]">
            Finish up and publish
          </h1>
          <p className="text-lg font-light">
            Finally, you'll choose booking settings, set up pricing, and publish
            your
            <br />
            listing.
          </p>
        </div>
        <img
          className="w-[700px] mt-16 h-[600px]"
          src="/images/CreateListPhotos/step3.png"
          alt=""
        />
      </div>
    </div>
  );
}
