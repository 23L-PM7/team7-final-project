"use client"
import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { FaRegHeart } from "react-icons/fa";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Divider from "@mui/material/Divider";
import { useState } from "react";

export function HeartButton() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [name, setName] = useState("");
  const [count, setCount] = useState("");

  function deleteAll() {
    setName("");
    return;
  }
  return (
    <React.Fragment>
      <div onClick={() => setOpen(true)}>
        <div className="text-white text-xl relative hover:opacity-80 transition cursor-pointer">
          <FaRegHeart />
        </div>
      </div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: 568,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            className="flex justify-center"
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Add to wishlist
          </Typography>
          <div className="divider"></div>

          <Stack spacing={1}>
            <Input
              value={count}
              size="lg"
              onChange={(event) => setCount(event.target.value)}
              placeholder="Name"
              className="w-full"
            />
          </Stack>
          <p className="font-light text-neutral-500"> /50 characters</p>
          <div className="divider m-0"></div>

          <div className="flex justify-between">
            <button onClick={deleteAll}>Clear</button>
            <button className="border p-2 max-w-32 rounded bg-gray-500 hover:bg-black text-white">
              Create
            </button>
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
