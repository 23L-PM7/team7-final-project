"use client";

import { PhotoSvg } from "@/app/components/icons/amenitiesIcons/PhotoSvg";
import { ImageField } from "@/app/components/imageField/ImageField";
import { useState } from "react";

export default function ListPhoto() {
  const [image, setImage] = useState("");
  return (
    <div className="h-[1000px] container mx-auto pt-32 w-[600px]  ">
      <div>
        <h1 className="text-3xl font-semibold mb-3 ">
          Add some photos of your boat
        </h1>
        <p className="text-lg font-light mb-5">
          You'll need 5 photos to get started. You can add more or make changes
          later.
        </p>
      </div>
      <div className="border-dashed border w-[640px] h-[345px] flex justify-center items-center flex-col">
        <PhotoSvg />
        <h1 className="text-2xl font-semibold">Drag your photos here</h1>
        <p className="font-light text-md">Choose at least 5 photos</p>
        <div>
          <ImageField value={image} onChange={setImage} />
        </div>
      </div>
    </div>
  );
}
