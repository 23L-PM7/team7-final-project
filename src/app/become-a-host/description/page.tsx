import { Kitchen } from "@/components/icons/amenitiesIcons/Kitchen";

export default function Description() {
  return (
    <div className="container mx-auto flex justify-center items-center pt-[373px]">
      <div className=" w-[630px] h-[480px] ">
        <h1 className="text-3xl font-medium mb-2">Create your description</h1>
        <p>Share what makes your place special.</p>
        <div className="rounded-xl h-[30px]  flex justify-between mt-12 mb-3">
          <textarea
            className="border p-5 hover:border-black w-[630px] h-[244px] rounded-md"
            name="text"
            id=""
          >
            You'll always remember your time at this unique place to stay.
          </textarea>
        </div>
      </div>
    </div>
  );
}
