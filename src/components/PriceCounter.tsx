import { useEffect, useState } from "react";
import { useNextButtonClickable } from "./newListHeaderFooter/ProgressFooter";

export function PriceCounter() {
  const { setNextButtonClickable }: any = useNextButtonClickable();
  let [number, setNumber] = useState(15);
  const [roomCount, _setRoomCount] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setNextButtonClickable(price);
  }, [price]);
  return (
    <div className="flex items-center max-w-60">
      <div
        type={price}
        onChange={(e) => setPrice(e.target.value)}
        className="flex justify-center items-center font-semibold w-[170px] text-9xl"
      >
        <p>$</p>
        {number}
      </div>
    </div>
  );
}
