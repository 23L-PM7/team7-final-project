"use client";

import HostHeader from "../../components/hosting/HostHeader";
import HostReservation from "../../components/hosting/HostReservation";
import SortReservation from "../../components/hosting/SortReservation";

export default function hosting() {
  return (
    <div className="flex flex-col ">
      <HostHeader />
      <HostReservation />
      <SortReservation />
    </div>
  );
}
