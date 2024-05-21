"use client";

import { useNextButtonClickable } from "../../../components/newListHeaderFooter/ProgressFooter";
import { useEffect, useState } from "react";
import { useBecomeHost } from "../store";

export default function Title() {
  const { setNextButtonClickable }: any = useNextButtonClickable();
  // const [title, setTitle] = useState("");
  const { title, setTitle } = useBecomeHost();

  useEffect(() => {
    if (title) {
      setNextButtonClickable(true);
    }
  }, [title]);

  return (
    <div className="container mx-auto flex justify-center items-center animate-fade-up pt-[373px]">
      <div className=" w-[630px] h-[480px] ">
        <h1 className="text-3xl font-medium mb-2">
          Now, let's give your boat a title
        </h1>
        <p>
          Short titles work best. Have fun with it—you can always change it
          later.
        </p>
        <div className="rounded-xl h-[30px]  flex justify-between mt-12 mb-3">
          <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border hover:border-black w-[630px] h-[178px] rounded-md"
            name="text"
            id=""
          ></textarea>
        </div>
      </div>
    </div>
  );
}
