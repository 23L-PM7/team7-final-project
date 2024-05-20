import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import { useState } from "react";
import { IoShareOutline } from "react-icons/io5";
import { IoIosCopy } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useBecomeHost } from "@/app/become-a-host/store";

export function ShareButton() {
  const [open, setOpen] = React.useState<boolean>(false);
  const { image, setImage } = useBecomeHost();

  return (
    <React.Fragment>
      <div onClick={() => setOpen(true)}>
        <div className="text-white text-xl relative hover:opacity-80 transition cursor-pointer">
          {/* <FaRegHeart /> */}
          <div className="border rounded-full p-2 bg-white text-black">
            <IoShareOutline />
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(1px)",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: 568,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            height: 478,
          }}
        >
          <ModalClose variant="plain" sx={{ m: 0 }} />
          <h1 className="text-2xl font-semibold">Share this experience</h1>
          <div className="flex gap-4 items-center mt-5">
            <img className="w-[64px] h-[64px] rounded-md" src={image} alt="" />
            <p>Crash at the X-Mansion</p>
          </div>
          <div className="grid grid-cols-2 text-xl gap-3 mt-5">
            <button className="border flex items-center gap-3 p-3 rounded-xl  w-full">
              <IoIosCopy />
              <p>Copy link</p>
            </button>
            <button className="border flex items-center gap-3 p-3 rounded-md  w-full">
              <MdEmail />
              <p>Email</p>
            </button>
            <button className="border flex items-center gap-3 p-3 rounded-md  w-full">
              <BiSolidMessageSquareDetail />
              <p>Messages</p>
            </button>
            <button className="border flex items-center gap-3 p-3 rounded-md  w-full">
              <FaSquareWhatsapp />
              <p>WhatsApp</p>
            </button>
            <button className="border flex items-center gap-3 p-3 rounded-md  w-full">
              <FaFacebookMessenger />
              <p>Messenger</p>
            </button>
            <button className="border flex items-center gap-3 p-3 rounded-md  w-full">
              <FaFacebookSquare />
              <p>Facebook</p>
            </button>
            <button className="border flex items-center gap-3 p-3 rounded-md  w-full">
              <FaSquareXTwitter />
              <p>Twitter</p>
            </button>
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
