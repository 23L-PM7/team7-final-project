"use client";

import * as React from "react";
import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";
import { useState } from "react";

export function GetStartFooter() {
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
      <div className="flex justify-between p-4 pr-20">
        <button></button>
        <a
          href="/become-a-host"
          onClick={GetStart}
          className="w-[200px] flex justify-center items-center h-[48px] border p-2 rounded-md text-white bg-rose-500"
        >
          Get Started
        </a>
      </div>
    </>
  );
}
