"use client";

import { useBecomeHost } from "../store";
import { useNextButtonClickable } from "@/components/newListHeaderFooter/ProgressFooter";
import { useEffect } from "react";

export default function Description() {
  const { description, setDescription } = useBecomeHost();
  const { setNextButtonClickable }: any = useNextButtonClickable();

  useEffect(() => {
    if (description) {
      setNextButtonClickable(true);
    }
  }, [description]);

  return (
    <div className="container mx-auto flex justify-center items-center pt-[373px]">
      <div className=" w-[630px] h-[480px] ">
        <h1 className="text-3xl font-medium mb-2">Create your description</h1>
        <p>Share what makes your place special.</p>
        <div className="rounded-xl h-[30px]  flex justify-between mt-12 mb-3">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-5 hover:border-black w-[630px] h-[244px] rounded-md"
            name="text"
            id=""
          >
            You'll always remember your time at this unique place to stay.
          </textarea>
        </div>
      </div>
    </div>
  );
}
