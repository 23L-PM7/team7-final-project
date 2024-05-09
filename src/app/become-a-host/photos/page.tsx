"use client";

import { PhotoSvg } from "@/components/icons/amenitiesIcons/PhotoSvg";
import { ImageField } from "@/components/imageField/ImageField";

import { useState } from "react";

export default function ListPhoto() {
  const [image, setImage] = useState("");
  return (
    <div className="h-[1000px] container mx-auto pt-48 w-[700px]  ">
      <div>
        <h1 className="text-3xl font-medium mb-3 ">
          Add some photos of your farm
        </h1>
        <p className="text-lg text-[#6A6A6A] font mb-5">
          You'll need 5 photos to get started. You can add more or make changes
          later.
        </p>
      </div>
      <div className="border-dashed border-2 w-[640px] h-[528px] flex justify-center items-center flex-col">
        <div className="mb-28 mt-28">
          <PhotoSvg />
          <h1 className="text-2xl font-semibold">Drag your photos here</h1>
          <p className="font-light text-md">Choose at least 5 photos</p>
        </div>
        <div>
          <ImageField value={image} onChange={setImage} />
        </div>
      </div>
    </div>
  );
}
