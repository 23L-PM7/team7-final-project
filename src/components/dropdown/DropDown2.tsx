import { useBecomeHost } from "../../app/become-a-host/store";
import * as React from "react";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListDivider from "@mui/joy/ListDivider";
import MoreVert from "@mui/icons-material/MoreVert";
import MenuButton from "@mui/joy/MenuButton";
import Dropdown from "@mui/joy/Dropdown";

export default function DropDown2() {
  const { image2, setImage2 } = useBecomeHost();
  function deletePhoto() {
    if (window.confirm("Are you sure delete this photo?")) {
      setImage2("");
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
      <Menu placement="bottom-end">
        <ListDivider />
        <MenuItem onClick={deletePhoto} variant="soft" color="danger">
          Delete
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
