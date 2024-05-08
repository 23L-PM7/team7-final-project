"use client";

import * as React from "react";
import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";
import { useState } from "react";

export function ProgressFooter() {
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = useState(false);

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
    <>
      <Stack spacing={2} sx={{ flex: 1 }}>
        <LinearProgress color="neutral" determinate value={0} />
      </Stack>
      <div className="flex justify-between pl-10 p-4 pr-10">
        <a href="/become-a-host" className="font-semibold">
          Back
        </a>
        <a
          href=""
          onClick={GetStart}
          className="w-[100px] h-[48px] justify-center items-center flex border p-2 rounded-md text-white bg-gray-700 hover:bg-black"
        >
          Next
        </a>
      </div>
    </>
  );
}
