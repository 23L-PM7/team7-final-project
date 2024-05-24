"use client";
import ModalReceit from "../../../components/modal/Modal";
import { LuCalendarCheck } from "react-icons/lu";
import { MdCalendarToday } from "react-icons/md";
import { SlPencil } from "react-icons/sl";
import { useEffect } from "react";
import { useNextButtonClickable } from "../../../components/newListHeaderFooter/ProgressFooter";

export default function Receipt() {
  const { setNextButtonClickable }: any = useNextButtonClickable();

  useEffect(() => {
    setNextButtonClickable(true);
  }, []);

  return (
    <div className="container mx-auto flex justify-center animate-fade-down items-center pt-56">
      <div className=" w-[850px] h-[480px] ">
        <h1 className="text-5xl font-medium mb-2">Review your listing</h1>
        <p className="font-light text-[#6A6A6A]">
          Here's what we'll show to guests. Make sure everything looks good.
        </p>
        <div className=" flex rounded-xl h-[30px] gap-10 mt-10 mb-3">
          <div>
            <ModalReceit />
          </div>
          <div>
            <h2 className="text-xl mb-8">What's next?</h2>
            <div className="flex gap-3 mb-5">
              <p className="text-3xl">
                <LuCalendarCheck />
              </p>
              <div className="flex flex-col">
                <h1 className="text-md font-semibold">
                  Confirm a few details and publish
                </h1>
                <p className="font-light text-md  text-[#6A6A6A]">
                  We’ll let you know if you need to verify your identity or
                  register with the local government.
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-5">
              <p className="text-3xl">
                <MdCalendarToday />
              </p>
              <div className="flex flex-col">
                <h1 className="text-md font-semibold">Set up your calendar</h1>
                <p className="font-light text-md text-[#6A6A6A]">
                  Choose which dates your listing is available. It will be
                  visible 24 hours after you publish.
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-5">
              <p className="text-3xl">
                <SlPencil />
              </p>
              <div className="flex flex-col">
                <h1 className="text-md font-semibold">Adjust your settings</h1>
                <p className="font-light text-sd  text-[#6A6A6A]">
                  Set house rules, select a cancellation policy, choose how
                  guests book, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
