"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function PublishCelebration() {
  const router = useRouter();

  const handleSetUrl = () => {
    router.push("/hosting");
  };
  return (
    <div className="w-full flex">
      <video
        className="w-[100%] h-[100%] relative"
        src="/Congratulations.mp4"
        width="auto"
        height="auto"
        autoPlay
      ></video>
      <button
        onClick={handleSetUrl}
        className="absolute bottom-5 right-5 border bg-red-500 w-[200px] h-[48px] p-3 rounded-lg text-white font-medium"
      >
        Let's get Start
      </button>
    </div>
  );
}
