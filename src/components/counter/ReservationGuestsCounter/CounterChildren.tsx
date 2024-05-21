import { useChildren } from "../../../app/globals";
import { Typography } from "@mui/joy";

function ChildrenCounter() {
  let { childrenNumber, setChildrenNumber }: any = useChildren();

  function Minus() {
    if (childrenNumber > 0) {
      childrenNumber = childrenNumber - 1;
      setChildrenNumber(childrenNumber);
    }
  }
  function Plus() {
    childrenNumber = childrenNumber + 1;
    setChildrenNumber(childrenNumber);
  }

  return (
    <div className="flex">
      <div className="w-full">
        <Typography level="title-md">Children</Typography>
        <Typography level="body-sm">Age 2-12</Typography>
      </div>
      <div className="mt-4 flex gap-4 justify-between items-center">
        <button onClick={Minus} className="size-7 rounded-full border-[1px]">
          -
        </button>
        <p className="font-normal">{childrenNumber}</p>
        <button onClick={Plus} className="size-7 rounded-full border-[1px]">
          +
        </button>
      </div>
    </div>
  );
}

export default ChildrenCounter;
