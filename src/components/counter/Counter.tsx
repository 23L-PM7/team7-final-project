import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
export function Counter() {
  let [number, setNumber] = useState(1);
  const [roomCount, _setRoomCount] = useState("");

  function minus() {
    if (number > 0) {
      number = number - 1;
      setNumber(number);
    }
  }
  function plus() {
    number = number + 1;
    setNumber(number);
  }
  return (
    <div className="flex items-center max-w-60">
      <button
        onClick={minus}
        className="border border-gray-300 w-8 h-8 rounded-full flex justify-center items-center text-gray-400"
      >
        <FaMinus />
      </button>
      <div className="mx-5">{number}</div>
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
