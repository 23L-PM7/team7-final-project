import { useBecomeHost } from "../../src/app/become-a-host/store";
import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useNextButtonClickable } from "../../src/components/newListHeaderFooter/ProgressFooter";

const humans = [
  {
    image: (
      <div>
        <img src="/images/human1.avif" alt="human" />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img src="/images/human1.avif" alt="human" />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img src="/images/human1.avif" alt="human" />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img src="/images/human1.avif" alt="human" />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img src="/images/human1.avif" alt="human" />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img src="/images/human1.avif" alt="human" />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img src="/images/human1.avif" alt="human" />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img src="/images/human1.avif" alt="human" />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img src="/images/human1.avif" alt="human" />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img src="/images/human1.avif" alt="human" />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img src="/images/human1.avif" alt="human" />
      </div>
    ),
  },
];
export function GuestsCounter() {
  const [roomCount, _setRoomCount] = useState("");
  const { guestsCount, setGuestCount } = useBecomeHost();
  const { setNextButtonClickable }: any = useNextButtonClickable();
  const [addedHumanImg, setAddedHumanImg]: any = useState(humans);

  function minus() {
    if (guestsCount > 1) {
      setGuestCount(guestsCount - 1);
    }
    if (addedHumanImg.length == 1) {
      return;
    } else {
      const quick = addedHumanImg.slice(0, -1);
      setAddedHumanImg(quick);
    }
  }

  function plus() {
    if (guestsCount == 16) {
      return;
    }
    setGuestCount(guestsCount + 1);

    const humans = {
      image: (
        <div>
          <img src="images/human1.avif" alt="" />
        </div>
      ),
    };
    setAddedHumanImg([...addedHumanImg, humans]);
    console.log(addedHumanImg);
  }

  useEffect(() => {
    if (guestsCount) {
      setNextButtonClickable(true);
    }
  }, [guestsCount]);
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-dvw flex justify-center items-center mb-5 gap-3">
        {addedHumanImg.map((item: any, index: number) => (
          <div>{item.image}</div>
        ))}
      </div>
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
