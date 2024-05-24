import * as React from "react";

import { useBecomeHost } from "../../app/become-a-host/store";
import { toast } from "sonner";
import ConfirmMOdal from "../ConfirmMOdal";

export default function Dropdownn() {
  const { image, setImage } = useBecomeHost();
  function deletePhoto() {
    if (window.confirm("Are you sure delete this photo?")) {
      setImage("");
      toast.success("image is successfully deleted");
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
