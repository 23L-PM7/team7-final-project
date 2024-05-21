import { useState } from "react";
import { usePet } from "../../../app/globals";
import { Typography } from "@mui/joy";

function PetCounter() {
  let { petNumber, setPetNumber }: any = usePet();

  function Minus() {
    if (petNumber > 0) {
      petNumber = petNumber - 1;
      setPetNumber(petNumber);
    }
  }
  function Plus() {
    petNumber = petNumber + 1;
    setPetNumber(petNumber);
  }

  return (
    <div className="flex">
      <div className="w-full">
        <Typography level="title-md">Pets</Typography>
        <Typography level="body-sm">Bringing a service animal?</Typography>
      </div>

      <div className="mt-4 flex gap-4 justify-between items-center">
        <button onClick={Minus} className="size-7 rounded-full border-[1px]">
          -
        </button>
        <p className="font-normal">{petNumber}</p>
        <button onClick={Plus} className="size-7 rounded-full border-[1px]">
          +
        </button>
      </div>
    </div>
  );
}

export default PetCounter;
