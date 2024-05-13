"use client";
import { useCreateListStep } from "@/store/useCreateListStep";
import { useRouter } from "next/navigation";
import { ChangeEventHandler } from "react";

export default function Page() {
  const router = useRouter();
  const { listing, updateListingGuestCount } = useCreateListStep();

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    updateListingGuestCount(Number(event.target.value));
  };

  console.log(listing);

  return (
    <div className="flex flex-col w-40 h-40 justify-center items-center">
      <input
        type="text"
        value={listing.guestCount}
        onChange={handleNameChange}
      />
    </div>
  );
}
