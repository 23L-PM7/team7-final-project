import { GetStartFooter } from "../../components/newListHeaderFooter/GetStartFooter";
import { ProgressHeader } from "../../components/newListHeaderFooter/ProgressHeader";

export default function Overview() {
  return (
    <>
      <ProgressHeader />
      <div className="container mx-auto pt-32 animate-fade-up animate-ease-linear">
        <div className=" flex gap-40 justify-center items-center p-10 h-[850px]">
          <div className="mt-32">
            <h1 className="text-6xl font-medium">
              It’s easy to get <br /> started on Airbnb
            </h1>
          </div>
          <div className="flex flex-col">
            <div className="flex pb-[32px]">
              <div className="flex">
                <p className="pr-[16px] text-2xl font-medium">1</p>
                <div>
                  <h1 className="text-2xl font-normal">
                    Tell us about your place
                  </h1>
                  <p className="text-lg text-[#6A6A6A]">
                    share some basic info, like where it is and how many <br />{" "}
                    guests can stay.
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="w-[120px] h-[120px]"
                  src="/images/or.webp"
                  alt="bed"
                />
              </div>
            </div>
            <div className="flex pb-[32px]">
              <div className="flex">
                <p className="pr-[16px] text-2xl font-medium">2</p>
                <div>
                  <h1 className="text-2xl font-normal">Make it stand out</h1>
                  <p className="text-lg text-[#6A6A6A]">
                    Add 5 or more photos plus a title and description—
                    <br />
                    we’ll help you out.
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="w-[120px] h-[120px]"
                  src="/images/or.webp"
                  alt="bed"
                />
              </div>
            </div>
            <div className="flex pb-[32px] ">
              <div className="flex">
                <p className="pr-[16px] text-2xl font-medium">3</p>
                <div>
                  <h1 className="text-2xl font-normal">
                    Finish up and publish
                  </h1>
                  <p className="text-lg text-[#6A6A6A]">
                    Choose if you'd like to start with an experienced
                    <br /> guest, set a starting price, and publish your
                    listing.
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="w-[120px] h-[120px]"
                  src="/images/or.webp"
                  alt="bed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetStartFooter />
    </>
  );
}
