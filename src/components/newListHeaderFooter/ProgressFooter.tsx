"use client";

import * as React from "react";
import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { create } from "zustand";

export const useNextButtonClickable = create((set) => ({
  nextButtonClickable: false,
  setNextButtonClickable: (newValue: boolean) =>
    set(() => ({ nextButtonClickable: newValue })),
}));

const stepValues = [
  "about-your-place",
  "structure",
  "privacy-type",
  "floor-plan",
  "guests",
  "stand-out",
  "amenities",
  "photos",
  "title",
  "description",
  "finish-setup",
  "price",
  "receipt",
  "publish-celebration",
];

export function ProgressFooter() {
  const pathname = usePathname();
  const router = useRouter();

  const currentPath = pathname.split("/")[2];
  const index = stepValues.findIndex((item) => item === currentPath);
  const percentage = ((index + 1) / stepValues.length) * 100;
  console.log({ currentPath, index, percentage });

  const { nextButtonClickable, setNextButtonClickable } =
    useNextButtonClickable();

  if (pathname === undefined) {
    router.push("/overview");
  }

  return (
    <div className="relative">
      <div className="fixed left-0 right-0 bottom-0 bg-white">
        <Stack spacing={2} sx={{ flex: 1 }}>
          <LinearProgress color="neutral" determinate value={percentage} />
        </Stack>
        <div className="flex sticky bottom-0 justify-between pl-10 p-4 pr-10">
          <a
            href={`/become-a-host/${stepValues[index - 1]}`}
            className="font-semibold rounded flex justify-center items-center hover:bg-slate-200 h-8 p-2"
          >
            Back
          </a>
          <span>{pathname}</span>
          <button
            disabled={!nextButtonClickable}
            onClick={() =>
              router.push(`/become-a-host/${stepValues[index + 1]}`)
            }
            className="w-[100px] h-[48px] border p-2 flex items-center justify-center rounded-md text-white bg-gray-700 hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
