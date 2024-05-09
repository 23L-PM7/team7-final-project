import { Kitchen } from "@/components/icons/amenitiesIcons/Kitchen";

export default function StandOut() {
  return (
    <div className="container mx-auto pt-32">
      <div className=" flex gap-40 p-10">
        <div className=" mt-64 ">
          <p className="text-lg font-medium mb-[16px]">Step 2</p>
          <h1 className="text-5xl font-medium mb-[24px]">
            Make your place stand out
          </h1>
          <p className="text-lg font-light">
            In this step, you’ll add some of the amenities your place
            <br />
            offers, plus 5 or more photos. Then, you’ll create a title and the
            <br />
            description.
          </p>
        </div>
        <img
          className="w-[730px] mt-16 h-[700px]"
          src="/images/CreateListPhotos/StandOut.png"
          alt=""
        />
      </div>
    </div>
  );
}
