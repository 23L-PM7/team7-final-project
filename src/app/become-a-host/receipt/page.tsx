import ModalReceit from "@/components/Modal";
import { AirCondition } from "@/components/icons/amenitiesIcons/AirCondition";

export default function Receipt() {
  return (
    <div className="container mx-auto flex justify-center items-center pt-[373px]">
      <div className=" w-[850px] h-[480px] ">
        <h1 className="text-3xl font-medium mb-2">Review your listing</h1>
        <p>
          Here's what we'll show to guests. Make sure everything looks good.
        </p>
        <div className=" flex rounded-xl h-[30px] gap-10 mt-10 mb-3">
          <div>
            <ModalReceit />
          </div>
          <div>
            <h2 className="">What's next?</h2>
            <div className="flex gap-3">
              <p>
                <AirCondition />
              </p>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">
                  Confirm a few details and publish
                </h1>
                <p className="font-light text-md">
                  We’ll let you know if you need to verify your identity or
                  register with the local government.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
