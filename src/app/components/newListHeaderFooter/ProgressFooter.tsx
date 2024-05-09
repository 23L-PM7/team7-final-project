"use client";

import * as React from "react";
import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function ProgressFooter() {
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  React.useEffect(() => {
    setLoading(true);
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    setLoading(false);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function GetStart() {
    setLoading(true);
  }

  return (
    <div className="relative">
      <div className="fixed left-0 right-0 bottom-0 bg-white">
        <Stack spacing={2} sx={{ flex: 1 }}>
          <LinearProgress color="neutral" determinate value={0} />
        </Stack>
        <div className="flex sticky bottom-0 justify-between pl-10 p-4 pr-10">
          <button onClick={() => router.back()} className="font-semibold">
            Back
          </button>
          <button
            onClick={GetStart}
            className="w-[100px] h-[48px] border p-2 rounded-md text-white bg-gray-700 hover:bg-black"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
