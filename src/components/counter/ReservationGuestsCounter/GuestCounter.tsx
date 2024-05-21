import AdultCounter from "./CounterAdult";
import ChildrenCounter from "./CounterChildren";
import InfantCounter from "./CounterInfant";
import PetCounter from "./CounterPet";
import {
  useAdult,
  useChildren,
  useGuests,
} from "../../../app/globals";
import { useEffect } from "react";

export function GuestCounter() {
  let { guestsNumber, setGuestsNumber }: any = useGuests();
  let { adultNumber }: any = useAdult();
  let { childrenNumber }: any = useChildren();

  return (
    <div className="flex flex-col gap-2">
      <AdultCounter />
      <ChildrenCounter />
      <InfantCounter />
      <PetCounter />
    </div>
  );
}
