import { AiOutlinePlus } from "react-icons/ai";
import { Image } from "./icons/Image";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export function UploadFile({ value, onChange }: any) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e: any) {
    setUploading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("upload_preset", "xnhpft2k");
    formData.append("cloud_name", "deyylvaoy");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/deyylvaoy/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        const { secure_url } = await res.json();
        onChange(secure_url);
        toast.success("image is successfully uploaded");
        setUploading(false);
      }
    } catch (e) {
      alert("An Error Occured While Uploading");
    }
  }
  return (
    <div onChange={handleUpload} className="flex flex-wrap">
      {!value && (
        <label
          id="dropzone-file"
          className={`hover:border-solid  border-dashed  flex justify-center items-center border w-[342px] border-black h-[228px] rounded-md`}
        >
          {uploading && (
            <div className="flex justify-center items-center gap-3">
              <span className="loading loading-dots loading-md"></span>
              <p className="mr-1">UPLOADING</p>
            </div>
          )}
          <div className="flex flex-col items-center justify-center text-gray-500 pt-5 pb-6">
            <Image />
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
          <Toaster richColors />
        </label>
      )}
    </div>
  );
}

export function UploadFileMore({ value, onChange }: any) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e: any) {
    setUploading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("upload_preset", "xnhpft2k");
    formData.append("cloud_name", "deyylvaoy");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/deyylvaoy/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        const { secure_url } = await res.json();
        onChange(secure_url);
        toast.success("image is successfully uploaded");
        setUploading(false);
      }
    } catch (e) {
      alert("An Error Occured While Uploading");
    }
  }
  return (
    <div onChange={handleUpload} className="flex flex-wrap">
      <Toaster position="top-right" richColors />
      {!value && (
        <label
          id="dropzone-file"
          className="hover:border-solid border-dashed border w-[342px] flex justify-center items-center border-black h-[228px] rounded-md"
        >
          {uploading && (
            <div className="flex justify-center items-center gap-3">
              <span className="loading loading-dots loading-md"></span>
              <p className="mr-1">UPLOADING</p>
            </div>
          )}
          {!uploading && (
            <div className="flex flex-col justify-center items-center text-4xl text-gray-500">
              <AiOutlinePlus />
              <p className="mb-2  text-gray-500 dark:text-gray-400 gap-2 text-sm flex items-center justify-center">
                <span className="font-semibold">Add more</span>
              </p>
            </div>
          )}
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      )}
    </div>
  );
}
