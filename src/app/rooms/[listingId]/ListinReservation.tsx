import { GuestCounter } from "@/components/counter/GuestCounter";
import { Button } from "@mui/base";
import { Accordion, AccordionDetails, AccordionSummary, Divider, Typography } from "@mui/joy";
import { NumericFormat } from "react-number-format";

export default function ListingReservation() {
    return(
        <div>
            <div className="flex items-center">
            <NumericFormat
              value={27}
              allowLeadingZeros
              thousandSeparator=","
              suffix="$"
              className="bg-transparent text-lg font-semibold"
              disabled
            />
            <Typography>night</Typography>
          </div>

          <div className="rounded-xl border-[1px] border-[#000000] grid gap-6">
            
            <GuestCounter />
          </div>

          <div>
            <Typography>CANCELLATION POLICIES</Typography>
            <div className="rounded-xl border-[1px] border-[#000000] grid gap-6">
              Hello
            </div>
          </div>
          <div>
            <Button>Reserve</Button>
            <Typography>You won't be charged yet</Typography>
          </div>
          <div>
            <Accordion>
              <AccordionSummary>Price Details</AccordionSummary>
              <AccordionDetails>
                <div></div>
              </AccordionDetails>
            </Accordion>
          </div>
          <Divider></Divider>
          <div className="flex justify-between">
            <Typography>Total before taxes</Typography>
            <NumericFormat
              value={27}
              allowLeadingZeros
              thousandSeparator=","
              suffix="$"
              className="bg-transparent text-lg font-semibold"
              disabled
            />
          </div>
        </div>
    )
}