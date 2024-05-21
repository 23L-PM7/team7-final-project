import { IoHomeOutline } from "react-icons/io5";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { PiBarnLight } from "react-icons/pi";
import { TbSailboat } from "react-icons/tb";
export function FirstSection() {
  return (
    <div>
      <h1 className=" text-3xl text-center mb-8 font-medium">
        Which of these best describes your place?
      </h1>
      <div className="gap-20px flex justify-center gap-4">
        <div className="border w-[202px] h-[99px] p-4  rounded-xl ">
          <div className="flex text-3xl mt-2">
            <IoHomeOutline />
          </div>
          <h1 className="flex mt-1.5">House</h1>
        </div>
        <div className="border w-[202px] h-[99px] p-4  rounded-xl justify-center">
          <div className="flex text-3xl mt-2">
            <PiBuildingApartmentLight />
          </div>
          <h1 className="flex mt-1.5">Apartment</h1>
        </div>
        <div className="border w-[202px] h-[99px] p-4  rounded-xl justify-center">
          <div className="flex text-3xl mt-2">
            <PiBarnLight />
          </div>
          <h1 className="flex mt-1.5">Barn</h1>
        </div>
      </div>
    </div>
  );
}
