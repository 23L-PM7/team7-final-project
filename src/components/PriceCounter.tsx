import { useEffect } from "react";
import { useNextButtonClickable } from "./newListHeaderFooter/ProgressFooter";
import { useBecomeHost } from "@/app/become-a-host/store";

export function PriceCounter() {
  const { setNextButtonClickable }: any = useNextButtonClickable();
  // let [number, setNumber] = useState(15);
  const { price, setPrice }: any = useBecomeHost();

  useEffect(() => {
    if (price) {
      setNextButtonClickable(true);
    }
  }, [price]);
  return (
    <div className="flex items-center max-w-60">
      <p className="text-9xl font-semibold">$</p>
      <input
        min={1}
        max={10000}
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="flex justify-center items-center outline-none font-semibold w-[350px] text-9xl"
      />
    </div>
  );
}
