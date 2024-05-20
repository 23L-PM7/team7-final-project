import * as React from "react";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { log } from "console";
import { useBecomeHost } from "../../app/become-a-host/store";

export default function Dropdownn() {
  const { image, setImage } = useBecomeHost();
  function deletePhoto() {
    if (window.confirm("Are you sure delete this photo?")) {
      setImage("");
      console.log("HEllo");
      return;
    }
  }
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "soft", color: "neutral" } }}
      >
        <MoreVert />
      </MenuButton>
      <Menu onClick={deletePhoto}>
        <MenuItem>Delete</MenuItem>
      </Menu>
    </Dropdown>
  );
}
