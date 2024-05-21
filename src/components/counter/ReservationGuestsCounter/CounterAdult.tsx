import { useAdult } from "../../../app/globals";
import { Typography } from "@mui/joy";

function AdultCounter() {
  let { adultNumber, setAdultNumber }: any = useAdult();

  function Minus() {
    if (adultNumber > 0) {
      adultNumber = adultNumber - 1;
      setAdultNumber(adultNumber);
    }
  }
  function Plus() {
    adultNumber = adultNumber + 1;
    setAdultNumber(adultNumber);
  }

  return (
    <div className="flex">
      <div className="w-full">
        <Typography level="title-md">Adult</Typography>
        <Typography level="body-sm">Age 13+</Typography>
      </div>
      <div className="mt-4 flex gap-4 justify-between items-center">
        <button onClick={Minus} className="size-7 rounded-full border-[1px]">
          -
        </button>
        <p className="font-normal">{adultNumber}</p>
        <button onClick={Plus} className="size-7 rounded-full border-[1px]">
          +
        </button>
      </div>
    </div>
  );
}

export default AdultCounter;
