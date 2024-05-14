import { useBecomeHost } from "@/app/become-a-host/store";
import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useNextButtonClickable } from "../newListHeaderFooter/ProgressFooter";

export function CounterBedrooms() {
  const [roomCount, setRoomCount] = useState("");
  const { bedroomCount, setBedroomCount } = useBecomeHost();
  const { setNextButtonClickable }: any = useNextButtonClickable();

  function minus() {
    if (bedroomCount > 0) {
      setBedroomCount(bedroomCount - 1);
    }
  }
  function plus() {
    setBedroomCount(bedroomCount + 1);
  }

  useEffect(() => {
    if (bedroomCount) {
      setNextButtonClickable(true);
    }
  }, [bedroomCount]);

  return (
    <div className="flex items-center max-w-60">
      <button
        onClick={minus}
        className="border border-gray-300 w-8 h-8 rounded-full flex justify-center items-center text-gray-400"
      >
        <FaMinus />
      </button>
      <div className="mx-5">{bedroomCount}</div>
      <button
        value={roomCount}
        onClick={plus}
        className="border border-gray-300 w-8 h-8 rounded-full flex justify-center items-center text-gray-400"
      >
        <FaPlus />
      </button>
    </div>
  );
}
