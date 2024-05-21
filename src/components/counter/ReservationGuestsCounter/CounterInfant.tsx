import { useInfant } from "../../../app/globals";
import { Typography } from "@mui/joy";

function InfantCounter() {
  let { infantNumber, setInfantNumber }: any = useInfant();

  function Minus() {
    if (infantNumber > 0) {
      infantNumber = infantNumber - 1;
      setInfantNumber(infantNumber);
    }
  }
  function Plus() {
    infantNumber = infantNumber + 1;
    setInfantNumber(infantNumber);
  }

  return (
    <div className="flex">
      <div className="w-full">
        <Typography level="title-md">Infant</Typography>
        <Typography level="body-sm">under 2</Typography>
      </div>

      <div className="mt-4 flex gap-4 justify-between items-center">
        <button onClick={Minus} className="size-7 rounded-full border-[1px]">
          -
        </button>
        <p className="font-normal">{infantNumber}</p>
        <button onClick={Plus} className="size-7 rounded-full border-[1px]">
          +
        </button>
      </div>
    </div>
  );
}

export default InfantCounter;
