"use client";

import { UploadFile, UploadFileMore } from "@/components/UploadFile";
import { PhotoSvg } from "@/components/icons/amenitiesIcons/PhotoSvg";
import { ImageField } from "@/components/imageField/ImageField";
import { useNextButtonClickable } from "@/components/newListHeaderFooter/ProgressFooter";
import { useEffect, useState } from "react";
import BecomeHost from "../page";
import { useBecomeHost } from "../store";
import Dropdown2 from "@/components/dropdown/DropDown1";
import Dropdown3 from "@/components/dropdown/DropDown2";
import Dropdown4 from "@/components/dropdown/DropDown3";
import Dropdown1 from "@/components/dropdown/DropDown1";
import Dropdownn from "@/components/dropdown/DropDownn";
import DropdownAddImage from "@/components/dropdown/DropDownAddImage";

export default function ListPhoto() {
  const { setNextButtonClickable }: any = useNextButtonClickable();
  const [uploading, setUploading] = useState(false);
  const {
    image,
    setImage,
    image1,
    setImage1,
    image2,
    setImage2,
    image3,
    setImage3,
    image4,
    setImage4,
  } = useBecomeHost();

  useEffect(() => {
    setNextButtonClickable(image && image1 && image2 && image3);
  }, [image, image1, image2, image3]);

  return (
    <div
      className={` ${
        image && "h-[1500px] pt-32"
      } h-[1000px] container mx-auto pt-48 w-[700px]`}
    >
      {!image && (
        <div>
          <h1 className="text-3xl font-medium mb-3 ">
            Add some photos of your farm
          </h1>
          <p className="text-lg text-[#6A6A6A] font mb-5">
            You'll need 5 photos to get started. You can add more or make
            changes later.
          </p>
        </div>
      )}
      {image && (
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-3xl font-medium mb-3 ">
              Choose at least 5 photos
            </h1>
            <p className="text-lg text-[#6A6A6A] font mb-5">Drag to reorder</p>
          </div>
          <button className="border w-[132px] h-[40px] rounded-3xl">
            + Add More
          </button>
        </div>
      )}
      <div
        className={` ${
          !image && "border-dashed border-2"
        } w-[700px] h-[528px] flex justify-center items-center flex-col`}
      >
        {!image && (
          <div className={`mb-28 mt-28`}>
            <PhotoSvg />
            <h1 className="text-2xl font-semibold">Drag your photos here</h1>
            <p className="font-light text-md">Choose at least 5 photos</p>
          </div>
        )}
        <div className="relative">
          {!image && <ImageField value={image} onChange={setImage} />}
          {image && <img alt="" className="rounded-lg " src={image} />}
          {image && (
            <div className="flex justify-between">
              <div className="w-[130px] border p-3 h-[32px] flex justify-center items-center bg-white rounded font-medium z-10 absolute top-4 left-4">
                Cover Photo
              </div>
              <div className="absolute top-4 right-4  z-10">
                <Dropdownn />
              </div>
            </div>
          )}
        </div>
      </div>

      {/*MORE IMAGE */}
      {image && (
        <div className="flex justify-center flex-wrap items-center gap-2">
          <div className="relative">
            {!image1 && <UploadFile value={image1} onChange={setImage1} />}
            {image1 && (
              <img
                alt=""
                className=" w-[342px] h-[228px] rounded-md"
                src={image1}
              />
            )}
            {image1 && (
              <div className="flex justify-between">
                <div className="absolute top-4 right-4 z-10">
                  <Dropdown2 />
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            {!image2 && <UploadFile value={image2} onChange={setImage2} />}
            {image2 && (
              <img
                alt=""
                className=" w-[342px] h-[228px] rounded-md"
                src={image2}
              />
            )}
            {image2 && (
              <div className="flex justify-between">
                <div className="absolute top-4 right-4 z-10">
                  <Dropdown3 />
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            {!image3 && <UploadFile value={image3} onChange={setImage3} />}
            {image3 && (
              <img
                alt=""
                className=" w-[342px] h-[228px] rounded-md"
                src={image3}
              />
            )}
            {image3 && (
              <div className="flex justify-between">
                <div className="absolute top-4 right-4 z-10">
                  <Dropdown4 />
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            {!image4 && <UploadFileMore value={image4} onChange={setImage4} />}
            {image4 && (
              <img
                alt=""
                src={image4}
                className="w-[342px] h-[228px] rounded-md"
              />
            )}
            {image4 && (
              <div className="flex justify-between">
                <div className="absolute top-4 right-4 z-10">
                  <DropdownAddImage />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
