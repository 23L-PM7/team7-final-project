import { useState } from "react";
import * as React from "react";
import Button from "@mui/joy/Button";
import SvgIcon from "@mui/joy/SvgIcon";
import { Typography, styled } from "@mui/joy";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export function ImageField({ value, onChange }: any) {
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
        setUploading(false);
      }
    } catch (e) {
      alert("An Error Occured While Uploading");
    }
  }
  return (
    <div>
      {uploading && (
        <div className="flex justify-center items-center gap-3">
          <span className="loading loading-dots loading-lg"></span>UPLOADING
        </div>
      )}
      <Button
        onChange={handleUpload}
        component="label"
        role={undefined}
        tabIndex={-1}
        variant="contained"
        color="neutral"
      >
        <Typography
          sx={{
            textDecoration: "underline",
            fontWeight: "400",
            fontSize: "14px",
          }}
          display="inline"
        >
          Upload from your device
        </Typography>
        <VisuallyHiddenInput type="file" />
      </Button>
    </div>
  );
}
