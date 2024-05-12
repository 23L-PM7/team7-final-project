import { useEffect, useState } from "react";

function Counter() {
  let [number, setNumber] = useState(0);

  function Minus() {
    if (number > 0) {
      number = number - 1;
      setNumber(number);
    }
  }
  function Plus() {
    number = number + 1;
    setNumber(number);
  }

  return (
    <div className="mt-4 flex gap-4 justify-between items-center">
      <button onClick={Minus} className="size-7 rounded-full border-[1px]">
        -
      </button>
      <p className="font-normal">{number}</p>
      <button onClick={Plus} className="size-7 rounded-full border-[1px]">
        +
      </button>
    </div>
  );
}

export default Counter;
