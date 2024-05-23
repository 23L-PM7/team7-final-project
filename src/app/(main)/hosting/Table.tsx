import Table from "@mui/joy/Table";
import axios from "axios";
import { useEffect, useState } from "react";

export type ReservationType = {
  _id: string;
  listingId: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  totalPrice: string;
  adult: string;
  children: string;
  infant: string;
  pet: string;
  name: string;
};

export default function BasicTable() {
  const [reservationInfo, setReservationInfo] = useState<ReservationType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchReservations = async () => {
    setLoading(true);
    await axios
      .get("http://localhost:3000/api/reservation")
      .then((datas) => setReservationInfo(datas.data as ReservationType[]));
    setLoading(false);
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const { documents }: any = reservationInfo;
  console.log("documents", documents);
  const tableInfo = (data: any) => {};

  return (
    <Table size="lg" aria-label="basic table">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Reservations</th>
          <th>Created at</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Adult</th>
          <th>children</th>
          <th>infant</th>
          <th>Pet</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {documents?.map((data: any, index: any) => {
          return (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.createdAt}</td>
              <td>{data.startDate}</td>
              <td>{data.endDate}</td>
              <td>{data.adult}</td>
              <td>{data.children}</td>
              <td>{data.infant}</td>
              <td>{data.pet}</td>
              <td>{data.totalPrice}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
