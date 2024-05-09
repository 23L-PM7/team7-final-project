"use client";

import { useCreateListStep } from "@/store/useCreateListStep";
import { useRouter } from "next/navigation";

export default function BecomeHost() {
  // const router = useRouter();
  // const { step, listing, handleNextStep, handlePrevStep, updateListingName } =
  //   useCreateListStep();
  // const handlePrev = () => {
  //   handlePrevStep();
  //   router.push("/");
  // };
  return (
    <>
      <div className="mt-20 flex justify-between h-[850px] border conatiner mx-auto p-10">
        <div>It’s easy to get started on Airbnb</div>
      </div>

      {/* <input
        type="text"
        value={listing.name}
        onChange={(event) => updateListingName(event.target.value)}
      />
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNextStep}>next</button> */}
    </>
  );
}
