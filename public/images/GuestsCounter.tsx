import { useBecomeHost } from "../../src/app/become-a-host/store";
import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useNextButtonClickable } from "../../src/components/newListHeaderFooter/ProgressFooter";

const humans = [
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/human1.avif"
          alt="human"
        />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/human2.avif"
          alt="human"
        />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/human3.avif"
          alt="human"
        />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/image4.avif"
          alt="human"
        />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/image5.avif"
          alt="human"
        />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/image6.avif"
          alt="human"
        />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/image7.avif"
          alt="human"
        />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/image8.avif"
          alt="human"
        />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/image9.avif"
          alt="human"
        />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/image10.avif"
          alt="human"
        />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/image11.avif"
          alt="human"
        />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/image12.avif"
          alt="human"
        />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/image13.avif"
          alt="human"
        />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/image14.avif"
          alt="human"
        />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/image7.avif"
          alt="human"
        />
      </div>
    ),
  },
  {
    image: (
      <div>
        <img
          className="w-[100px] h-[100px]"
          src="/images/image15.avif"
          alt="human"
        />
      </div>
    ),
  },
];
export function GuestsCounter() {
  const [roomCount, _setRoomCount] = useState("");
  const { guestsCount, setGuestCount } = useBecomeHost();
  const { setNextButtonClickable }: any = useNextButtonClickable();
  const [addedHumanImg, setAddedHumanImg]: any = useState([
    {
      image: (
        <div>
          <img
            className="w-[100px] h-[100px]"
            src="/images/human1.avif"
            alt="human"
          />
        </div>
      ),
    },
  ]);

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
    setAddedHumanImg([...addedHumanImg, humans[guestsCount]]);
    console.log(addedHumanImg);
  }

  useEffect(() => {
    if (guestsCount) {
      setNextButtonClickable(true);
    }
  }, [guestsCount]);
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-[1000px] flex justify-center items-center mb-5 ">
        {addedHumanImg.map((item: any, index: number) => (
          <div>{item.image}</div>
        ))}
      </div>
      <div>How many guests can fit comfortably in your space?</div>
      <div className="flex items-center max-w-80">
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
