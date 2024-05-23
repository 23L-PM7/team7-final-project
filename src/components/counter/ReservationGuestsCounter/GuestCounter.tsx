import AdultCounter from "./CounterAdult";
import ChildrenCounter from "./CounterChildren";
import InfantCounter from "./CounterInfant";
import PetCounter from "./CounterPet";
import {
  useAdult,
  useChildren,
  useGuests,
  useInfant,
  usePet,
} from "../../../app/globals";
import { useEffect } from "react";

export function GuestCounter() {
  const { clientNumber, setClientNumber }: any = useGuests();
  const { adultNumber } : any = useAdult();
  const { childrenNumber } : any = useChildren();
  const { infantNumber } : any = useInfant();
  const { petNumber } : any = usePet();

  const totalClient = adultNumber + childrenNumber + infantNumber + petNumber

  useEffect(() => {
    setClientNumber(totalClient);
  }, [totalClient]);

  console.log(clientNumber);

  return (
    <div className="flex flex-col gap-2">
      <AdultCounter />
      <ChildrenCounter />
      <InfantCounter />
      <PetCounter />
    </div>
  );
}
