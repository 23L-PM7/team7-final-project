import { useBecomeHost } from "../../app/become-a-host/store";
import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useNextButtonClickable } from "../newListHeaderFooter/ProgressFooter";

export function CounterBed() {
  const [roomCount, setRoomCount] = useState("");
  const { bedCount, setBedCount } = useBecomeHost();
  const { setNextButtonClickable }: any = useNextButtonClickable();

  function minus() {
    if (bedCount > 0) {
      setBedCount(bedCount - 1);
    }
  }
  function plus() {
    setBedCount(bedCount + 1);
  }

  useEffect(() => {
    if (bedCount) {
      setNextButtonClickable(true);
    }
  }, [bedCount]);

  return (
    <div className="flex items-center max-w-60">
      <button
        onClick={minus}
        className="border border-gray-300 w-8 h-8 rounded-full flex justify-center items-center text-gray-400"
      >
        <FaMinus />
      </button>
      <div className="mx-5">{bedCount}</div>
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
