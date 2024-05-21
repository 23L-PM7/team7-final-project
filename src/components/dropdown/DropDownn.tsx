import * as React from "react";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from "@mui/icons-material/MoreVert";
import { useBecomeHost } from "../../app/become-a-host/store";
import { Toaster, toast } from "sonner";
import { FcDeleteDatabase } from "react-icons/fc";
import ConfirmMOdal from "../ConfirmMOdal";

export default function Dropdownn() {
  const { image, setImage } = useBecomeHost();
  function deletePhoto() {
    if (window.confirm("Are you sure delete this photo?")) {
      setImage("");
      toast.success("Event has not been deleted");
      return;
    }
  }
  return (
    <>
      <div>
        <ConfirmMOdal />
      </div>
    </>
  );
}
