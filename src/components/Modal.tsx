"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";

export default function ModalReceit() {
  const [size, setSize] = React.useState<ModalDialogProps["size"] | undefined>(
    undefined
  );
  return (
    <React.Fragment>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Button
          className="w-[356px] h-[397px] rounded-lg"
          variant="outlined"
          color="neutral"
          size="lg"
          onClick={() => setSize("lg")}
        >
          <img src="images/mountain.jpg" />
          Large
        </Button>
      </Stack>
      <Modal open={!!size} onClose={() => setSize(undefined)}>
        <ModalDialog size={size}>
          <ModalClose />
          <DialogTitle>Modal Dialog</DialogTitle>
          <DialogContent>This is a `{size}` modal dialog.</DialogContent>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
