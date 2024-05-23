import { SubjectSharp } from "@mui/icons-material";
import { Button, Typography } from "@mui/joy";
import { light } from "@mui/material/styles/createPalette";
import axios from "axios";
import { useEffect, useState } from "react";
import BasicTable from "./Table";
export default function SortReservation() {
  //   export default function BasicTable() {
  const [reservationInfo, setReservationInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchReservations = async () => {
    setLoading(true);
    await axios
      .get("http://localhost:3000/api/reservation")
      .then((datas) => setReservationInfo(datas.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div className="flex flex-col  container mx-auto">
      <div className="flex gap-5 mb-10">
        <Button
          sx={{
            fontWeight: "light",
            borderRadius: 20,
            border: 1,
            ":active": { backgroundColor: "slate-50" },
          }}
          size="md"
          variant="outlined"
          color="neutral"
        >
          Checked Out(0)
        </Button>
        <Button
          sx={{ fontWeight: "light", borderRadius: 20, border: 1 }}
          size="md"
          variant="outlined"
          color="neutral"
        >
          Currently hosting()
        </Button>
        <Button
          sx={{ fontWeight: "light", borderRadius: 20, border: 1 }}
          size="md"
          variant="outlined"
          color="neutral"
        >
          Arriving soon(0)
        </Button>
      </div>
      {!reservationInfo && (
        <div className=" w-full mx-auto bg-slate-50 flex flex-col rounded-xl h-48 justify-center">
          <div className="flex flex-col justify-center items-center">
            <p className="mb-3">
              <SubjectSharp fontSize="large" />
            </p>

            <p className="items-center w-[200px] h-9 text-center">
              You don't have any guest reviews to write.
            </p>
          </div>
        </div>
      )}
      {!!reservationInfo && (
        <div>
          <BasicTable />
        </div>
      )}
    </div>
  );
}
