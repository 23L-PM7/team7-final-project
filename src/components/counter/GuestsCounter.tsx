import BecomeHost from "@/app/become-a-host/page";
import { useBecomeHost } from "@/app/become-a-host/store";
import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useNextButtonClickable } from "../newListHeaderFooter/ProgressFooter";
export function GuestsCounter() {
  const [roomCount, _setRoomCount] = useState("");
  const { guestsCount, setGuestCount } = useBecomeHost();
  const { setNextButtonClickable }: any = useNextButtonClickable();

  function minus() {
    if (guestsCount > 0) {
      setGuestCount(guestsCount - 1);
    }
  }
  function plus() {
    setGuestCount(guestsCount + 1);
  }

  useEffect(() => {
    if (guestsCount) {
      setNextButtonClickable(true);
    }
  }, [guestsCount]);
  return (
    <div className="flex items-center max-w-60">
      <button
        onClick={minus}
        className="border border-gray-300 w-8 h-8 rounded-full flex justify-center items-center text-gray-400"
      >
        <FaMinus />
      </button>
      <div className="flex justify-center items-center font-semibold w-[170px] text-9xl">
        {guestsCount}
      </div>
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
