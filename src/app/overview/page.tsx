import { GetStartFooter } from "@/components/newListHeaderFooter/GetStartFooter";
import { HeaderLayout } from "@/components/newListHeaderFooter/HeaderLayout";
import { ProgressHeader } from "@/components/newListHeaderFooter/ProgressHeader";

export default function Overview() {
  return (
    <>
      <ProgressHeader />
      <div className="container mx-auto pt-32">
        <div className=" flex gap-40 p-10">
          <div className=" mt-64 ">
            <p className="text-lg font-medium mb-[16px]">Step 1</p>
            <h1 className="text-5xl font-medium mb-[24px]">
              Tell us about your place
            </h1>
            <p className="text-lg font-light">
              In this step, we'll ask you which type of property you have and if
              <br />
              guests will book the entire place or just a room. Then let us know
              the
              <br />
              location and how many guests can stay.
            </p>
          </div>
          <img
            className="w-[600px] mt-16 h-[600px]"
            src="/images/CreateListPhotos/home.png"
            alt=""
          />
        </div>
      </div>
      <GetStartFooter />
    </>
  );
}
