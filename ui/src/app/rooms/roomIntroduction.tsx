import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { useCheckIn, useCheckOut } from "../globals";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Typography } from "@mui/joy";

export function RoomIntroduction() {
  const { checkIn, setCheckIn }: any = useCheckIn();
  const { checkOut, setCheckOut }: any = useCheckOut();

  console.log(checkIn);
  console.log(checkOut);

  return (
    <div className="flex">
      <div className="w-4/6">
        <Typography>Room in Khujirt, Mongolia</Typography>
        <div className="flex">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar onChange={(newValue) => setCheckIn(newValue)} />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar onChange={(newValue) => setCheckOut(newValue)} />
          </LocalizationProvider>
        </div>
      </div>
      <div className="w-2/6 p-6 rounded-xl border-[1px] border-[#DDDDDD] shadow-[0px_6px_16px_rgba(0,0,0,0.12)] "></div>
    </div>
  );
}
