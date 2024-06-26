import { GuestCounter } from "../../../components/counter/ReservationGuestsCounter/GuestCounter";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/joy";
import { NumericFormat } from "react-number-format";
import { useDate, useGuests, useDays } from "../../globals";
import {
  DateRangePicker,
  LocalizationProvider,
  MultiInputDateRangeField,
} from "@mui/x-date-pickers-pro";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { FormControlLabel } from "@mui/material";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import Button from "@mui/joy/Button";
import AccordionActions from "@mui/material/AccordionActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaChevronDown } from "react-icons/fa";

export default function ListingReservation() {
  const { date, setDate }: any = useDate();
  const { daysNumber }: any = useDays();
  const { clientNumber }: any = useGuests();

  console.log(daysNumber);

  return (
    <div className="w-2/6 h-[530px] p-6 rounded-xl border-[1px] border-[#DDDDDD] shadow-[0px_6px_16px_rgba(0,0,0,0.12)] grid gap-6">
      <div className="flex items-center">
        <NumericFormat
          value={27}
          thousandSeparator=","
          suffix="$"
          className="w-10 bg-transparent text-lg font-semibold"
        />
        <Typography>night</Typography>
      </div>

      <div className="rounded-xl border-[1px] border-[#000000] grid gap-6">
        <div>
          <div className="p-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateRangeCalendar"]}>
                <DateRangePicker
                  sx={{ border: 0 }}
                  slotProps={{
                    textField: ({ position }) => ({
                      label: position === "start" ? "check-in" : "check-out",
                    }),
                  }}
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="border-t-[1px] border-[#000000] p-2 items.center">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div>
                  <Typography level="body-xs">guest</Typography>
                  <Typography>{clientNumber} guests</Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails sx={{ my: 4 }}>
                <GuestCounter />
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <Button>Reserve</Button>
        <Typography>You won't be charged yet</Typography>
      </div>

      <div className="grid gap-4">
        <div className="flex w-full justify-between">
          <Typography>$24 x 5 nights</Typography>
          <NumericFormat
            value={120}
            thousandSeparator=","
            suffix="$"
            className="w-12 bg-transparent text-lg font-semibold"
          />
        </div>
        <div className="flex w-full justify-between">
          <Typography>Airbnb service fee</Typography>
          <NumericFormat
            value={27}
            thousandSeparator=","
            suffix="$"
            className="w-12 bg-transparent text-lg font-semibold"
          />
        </div>
      </div>
      <Divider />
      <div className="flex w-full justify-between">
        <Typography>Total before taxes</Typography>
        <NumericFormat
          value={27}
          allowLeadingZeros
          thousandSeparator=","
          suffix="$"
          className="w-12 bg-transparent text-lg font-semibold"
          disabled
        />
      </div>
    </div>
  );
}
