import { useEffect, useState } from "react";
import { useNextButtonClickable } from "./newListHeaderFooter/ProgressFooter";

export function PriceCounter() {
  const { setNextButtonClickable }: any = useNextButtonClickable();
  let [number, setNumber] = useState(15);
  const [roomCount, _setRoomCount] = useState("");
  const [price, setPrice] = useState(15);

  useEffect(() => {
    setNextButtonClickable(price);
  }, [price]);
  return (
    <div className="flex items-center max-w-60">
      <p className="text-9xl font-semibold">$</p>
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="flex justify-center items-center outline-none font-semibold w-[350px] text-9xl"
      />
    </div>
  );
}
