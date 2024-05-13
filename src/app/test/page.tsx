"use client";
import { useCreateListStep } from "@/store/useCreateListStep";
import { useRouter } from "next/navigation";
import { ChangeEventHandler } from "react";

export default function Page() {
  const router = useRouter();
  const { listing, updateListingName } = useCreateListStep();
  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    updateListingName(event.target.value);
  };

  const pushToNextSelection = () => {
    router.push("/test2");
  };

  return (
    <div className="flex flex-col w-40 h-40 justify-center items-center border border-solid">
      <input type="text" value={listing.name} onChange={handleNameChange} />
      <button onClick={pushToNextSelection}>pushToNextSelection</button>
    </div>
  );
}
