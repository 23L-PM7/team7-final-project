import { useState } from "react";
import Counter from "./Counter";
import { Typography } from "@mui/joy";

export function GuestCounter() {
  let [adultNumber, setAdultNumber] = useState(0);
  let [childrenNumber, setChildrenNumber] = useState(0);
  let [infantNumber, setInfantNumber] = useState(0);
  let [petNumber, setPetsNumber] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex">
        <div className="w-full">
          <Typography level="title-md">Adult</Typography>
          <Typography level="body-sm">Age 13+</Typography>
        </div>
        <Counter />
      </div>
      <div className="flex">
        <div className="w-full">
          <Typography level="title-md">Children</Typography>
          <Typography level="body-sm">Age 2-12</Typography>
        </div>
        <Counter />
      </div>
      <div className="flex">
        <div className="w-full">
          <Typography level="title-md">Infant</Typography>
          <Typography level="body-sm">under 2</Typography>
        </div>

        <Counter />
      </div>
      <div className="flex">
        <div className="w-full">
          <Typography level="title-md">Pets</Typography>
          <Typography level="body-sm">Bringing a service animal?</Typography>
        </div>

        <Counter />
      </div>
    </div>
  );
}
