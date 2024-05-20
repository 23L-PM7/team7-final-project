import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { MdDeleteForever } from "react-icons/md";
import { useBecomeHost } from "@/app/become-a-host/store";
import { toast } from "sonner";

export default function () {
  const { image, setImage } = useBecomeHost();
  function deletePhoto() {
    setImage("");
    toast.success("Event has not been deleted");
    return;
  }
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <Button
        className="text-2xl border p-1 w-[35px] h-[35px] justify-center flex items-center rounded-full bg-white"
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        <MdDeleteForever />
      </Button>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <h1 className="flex justify-center items-center font-semibold">
            Delete this photo?
          </h1>
          <p className="p-3 font-light">
            Once you delete it, you can't get it back.
          </p>
          <div className="flex justify-between">
            <button>cancel</button>
            <button
              onClick={deletePhoto}
              className="border p-1 rounded-lg bg-black text-white"
            >
              Delete it
            </button>
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
