import { useBecomeHost } from "../../app/become-a-host/store";
import * as React from "react";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListDivider from "@mui/joy/ListDivider";
import MoreVert from "@mui/icons-material/MoreVert";
import MenuButton from "@mui/joy/MenuButton";
import Dropdown from "@mui/joy/Dropdown";
import { Toaster, toast } from "sonner";

export default function DropdownAddImage() {
  const { image4, setImage4 } = useBecomeHost();
  function deletePhoto() {
    if (window.confirm("Are you sure delete this photo?")) {
      toast.error("Event has not been deleted");
      setImage4("");
      return;
    }
  }
  return (
    <Dropdown>
      <Toaster richColors />
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
