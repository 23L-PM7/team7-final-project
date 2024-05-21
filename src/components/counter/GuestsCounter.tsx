import { useBecomeHost } from "../../app/become-a-host/store";
import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useNextButtonClickable } from "../newListHeaderFooter/ProgressFooter";
export function GuestsCounter() {
  const [roomCount, _setRoomCount] = useState("");
  const { guestsCount, setGuestCount } = useBecomeHost();
  const { setNextButtonClickable }: any = useNextButtonClickable();
  const [addedHumanImg, setAddedHumanImg] = useState("img");

  function minus() {
    if (guestsCount > 1) {
      setGuestCount(guestsCount - 1);
    }
    if (addedHumanImg > "img") {
      setAddedHumanImg(addedHumanImg);
    }
  }
  function plus() {
    setGuestCount(guestsCount + 1);
    setAddedHumanImg(addedHumanImg + "img");
  }

  useEffect(() => {
    if (guestsCount) {
      setNextButtonClickable(true);
    }
  }, [guestsCount]);
  return (
    <div className="flex justify-center items-center flex-col">
      <div>{addedHumanImg}</div>
      <div>How many guests can fit comfortably in your space?</div>
      <div className="flex items-center max-w-60">
        <button
          onClick={minus}
          className={`border border-gray-300 w-8 h-8 rounded-full flex justify-center items-center text-gray-400 ${
            guestsCount === 1 ? "cursor-not-allowed opacity-50" : ""
          } `}
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
    </div>
  );
}
