"use client";

import * as React from "react";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { AiFillFacebook } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useDate, useDays, useGuests, useListingDetails, useAdult, useChildren, useInfant, usePet } from "../../globals";
import { DateRangePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/joy";
import { GuestCounter } from "../../../components/counter/ReservationGuestsCounter/GuestCounter";
import axios from "axios";
import { toast } from "sonner";
import { useState, useEffect } from "react";

export default function Reservation() {
  const { date, setDate }: any = useDate();
  const { clientNumber }: any = useGuests();
  const { daysNumber, setDaysNumber }: any = useDays();
  const { listingDetails } : any = useListingDetails();
  const { adultNumber } : any = useAdult();
  const { childrenNumber } : any = useChildren();
  const { infantNumber } : any = useInfant();
  const { petNumber } : any = usePet();
  const router = useRouter();

  const [listingId, setListingId] = useState("");
  const [startDate, setStartdDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);
  const [pet, setPet] = useState(0);

  const totalDays = 0 - date[0].diff(date[1], "day")

  const clientToCharge = adultNumber + childrenNumber;
  const priceBeforeFee = totalDays * listingDetails.price * clientToCharge;
  const totalPrice = priceBeforeFee + 15;

  useEffect(() => {
    setDaysNumber(totalDays);
  }, [date]);

  useEffect(() => {
    setListingId(listingDetails._id);
    setStartdDate(date[0]);
    setEndDate(date[1]);
    setAdult(adultNumber);
    setChildren(childrenNumber);
    setInfant(infantNumber);
    setPet(petNumber);
  }, [totalPrice]);

  const newReservationRequest = async () => {
    const reservationData = {
      listingId,
      startDate,
      endDate,
      totalPrice,
      adult,
      children,
      infant,
      pet,
    };

    await axios
      .post("http://localhost:3000/api/reservation", { ...reservationData })
      .then(() => {
        toast.success(`"${listingDetails.title}" түрээслэх хүсэлт амжилтта үүслээ.`);
        homePage;
      });
  };

  console.log(listingId);

  const homePage = () => {
    router.push("/");
  };

  const SignIn = () => {
    router.push("/signin");
  };

  const SignUp = () => {
    router.push("/signup");
  };

  return (
    <div className="mx-auto w-[1300px] h-screen justify-center font-circular pt-20">
      <div className="flex justify-start items-center h-[116px] text-[32px] font-extrabold">
        Reservation
      </div>
      <div className="flex w-full">
        <div className="w-[600px] flex flex-col">
          <div className="mb-5 pb-5 flex flex-col w-full h-48  justify-between ">
            <h3 className="text-[22px] font-bold">Your trip</h3>

            <div className="rounded-xl grid gap-6 mb-60 w-[570px]">
              <div>
                <div className="p-2 mb-2">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateRangeCalendar"]}>
                      <DateRangePicker
                        sx={{ border: 0 }}
                        slotProps={{
                          textField: ({ position }) => ({
                            label:
                              position === "start" ? "check-in" : "check-out",
                          }),
                        }}
                        value={date}
                        onChange={(newDate) => setDate(newDate)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>

                <div className="absolute rounded bg-white p-2 items.center w-[570px]">
                  <AccordionGroup>
                    <Accordion>
                      <AccordionSummary>
                        <div>
                          <Typography level="body-xs">guest</Typography>
                          <Typography>{clientNumber} guests</Typography>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <GuestCounter />
                      </AccordionDetails>
                    </Accordion>
                  </AccordionGroup>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 w-full justify-between mb-4">

            <div className="flex justify-between rounded p-4 w-1/3">
              <div>
                <p className="text-sm text-slate-400">Country code</p>
                <select className="text-sm">
                  <option value="">Mongolia (+976)</option>
                  <option value="">Russia (+7)</option>
                  <option value="">China (+86)</option>
                </select>
              </div>
            </div>

            <input
              className="flex justify-between rounded p-5 w-2/3 text-xl"
              type="text"
              placeholder="Phone number"
            />
          </div>
          <p className="text-xs mb-10 flex justify-center">
            We’ll call or text you to confirm your number. Standard message and
            data rates apply. Privacy Policy
          </p>

          <div className="flex flex-col">
            <h3 className="text-[22px] font-bold mb-3">
              Log in or sign up to book
            </h3>

            <button
              className="w-full bg-red-500 h-[52px] rounded text-white font-bold mb-5"
              onClick={newReservationRequest}
            >
              Reserve
            </button>
            <button className="mb-5" onClick={SignUp}>
              Not registered yet? Sign-up
            </button>
          </div>

          <div className="flex flex-col border-t-2 mb-8">
            <div className="w-full flex justify-evenly gap-3 mt-10">
              <button className="border-2 rounded w-1/3 h-[52px] flex justify-center items-center fill-blue-600">
                <AiFillFacebook className="w-6 h-6" />
              </button>
              <button className="border-2 rounded w-1/3 h-[52px] flex justify-center items-center">
                <FcGoogle className="w-6 h-6" />
              </button>
              <button className="border-2 rounded w-1/3 h-[52px] flex justify-center items-center">
                <ImAppleinc className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* price */}

        <div className="ml-28 w-1/2 flex flex-col border-2 rounded-xl h-96 p-5">
          <div className="flex gap-5 pb-5 border-b-2">
            <div className="border-2 rounded-xl w-[104px] h-[104px]">
              <img
                className="w-full h-full"
                src={listingDetails.images[0]}
                alt="zostel"
              />
            </div>
            <div className="flex flex-col justify-around">

              <div>
                <h3 className="font-semibold">
                  {listingDetails.title}
                </h3>
                <h3 className="font-semibold">{listingDetails.type}</h3>
              </div>

              <h3>Room in hostel</h3>

            </div>
          </div>
          <div>
            <h3 className="py-5 text-[22px] font-bold">Price details</h3>
            <div className="flex justify-between py-3 ">
              <h3>{listingDetails.price} $ x {daysNumber} nights</h3>
              <h3>${priceBeforeFee}</h3>
            </div>
            <div className=" py-3 flex justify-between">
              <h3>Taxes</h3>
              <h3>$15</h3>
            </div>
          </div>
          <div className=" py-3 flex justify-between border-t-2">
            <h3>Total (USD)</h3>
            <h3>${totalPrice}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
