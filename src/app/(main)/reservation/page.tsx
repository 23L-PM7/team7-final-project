"use client";

import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";

import Typography from "@mui/joy/Typography";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { AiFillFacebook } from "react-icons/ai";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import { useRouter } from "next/navigation";
import Calendar from "../../components/LittleMenus/Calendar";
import { GuestCounter } from "../../components/counter/ReservationGuestsCounter/GuestCounter";
import { useDate, useGuests } from "../globals";

// import DateRange from "@components/LittleMenus/DateRange";

export default function Reservation() {
  const [openDate, setOpenDate] = React.useState<boolean>(false);
  const [openGuest, setOpenGuest] = React.useState<boolean>(false);
  const { date, setDate }: any = useDate();
  const { guestsNumber, setGuestsNumber }: any = useGuests();
  // const { days, setDays }: any = useDays();

  const router = useRouter();

  const SignIn = () => {
    router.push("/signin");
  };

  const SignUp = () => {
    router.push("/signup");
  };

  return (
    <div className="mx-auto w-[1300px] h-screen justify-center font-circular pt-20">
      <div className="flex justify-start items-center h-[116px] text-[32px] font-extrabold">
        Confirm and pay
      </div>
      <div className="flex w-full">
        <div className="w-1/2 flex flex-col">
          <div className="mb-5 pb-5 flex flex-col w-full h-48 border-b-2 justify-between ">
            <h3 className="text-[22px] font-bold">Your trip</h3>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h3 className="font-bold">Dates</h3>
                <p>{date.toString()}</p>
              </div>
              <div>
                <React.Fragment>
                  <Button
                    variant="outlined"
                    color="neutral"
                    onClick={() => setOpenDate(true)}
                    className="font-bold"
                  >
                    Edit
                  </Button>
                  <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={openDate}
                    onClose={() => setOpenDate(false)}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Sheet
                      variant="outlined"
                      sx={{
                        maxWidth: 800,
                        borderRadius: "md",
                        p: 3,
                        boxShadow: "lg",
                      }}
                    >
                      <ModalClose variant="plain" sx={{ m: 1 }} />
                      <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                      >
                        <Calendar />
                      </Typography>
                    </Sheet>
                  </Modal>
                </React.Fragment>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h3 className="font-bold">Guests</h3>
                <h3>{guestsNumber}</h3>
              </div>
              <div>
                <React.Fragment>
                  <Button
                    variant="outlined"
                    color="neutral"
                    onClick={() => setOpenGuest(true)}
                  >
                    Edit
                  </Button>
                  <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={openGuest}
                    onClose={() => setOpenGuest(false)}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Sheet
                      variant="outlined"
                      sx={{
                        maxWidth: 800,

                        borderRadius: "md",
                        p: 3,
                        boxShadow: "lg",
                      }}
                    >
                      <ModalClose variant="plain" sx={{ m: 1 }} />
                      <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                      >
                        <GuestCounter />
                      </Typography>
                    </Sheet>
                  </Modal>
                </React.Fragment>
              </div>
            </div>
          </div>

          <div className=" flex flex-col w-full h-48  justify-between">
            <div className="flex justify-between border-2 rounded p-4">
              <div>
                <p className="text-sm text-slate-400">Country code</p>
                <select className="text-xl">
                  <option value="">Mongolia (+976)</option>
                  <option value="">Russia (+976)</option>
                  <option value="">China (+976)</option>
                </select>
              </div>
            </div>

            <input
              className="flex justify-between border-2 rounded p-5 h-full text-xl"
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
              onClick={SignIn}
            >
              Sign-in to Continue
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
                src="/images/zostel.avif"
                alt="zostel"
              />
            </div>
            <div className="flex flex-col justify-around">
              <div>
                <h3 className="font-semibold">
                  Zostel Shangarh | Standard Private Room
                </h3>
                <h3 className="font-semibold">Private Room</h3>
              </div>

              <h3>Room in hostel</h3>
            </div>
          </div>
          <div>
            <h3 className="py-5 text-[22px] font-bold">Price details</h3>
            <div className="flex justify-between py-3 ">
              <h3>$23.96 x 5 nights</h3>
              <h3>$119.80</h3>
            </div>
            <div className=" py-3 flex justify-between">
              <h3>Taxes</h3>
              <h3>$14.38</h3>
            </div>
          </div>
          <div className=" py-3 flex justify-between border-t-2">
            <h3>Total (USD)</h3>
            <h3>$134.18</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
