"use client";

import HostHeader from "../(main)/hosting/HostHeader";
import HostReservation from "../(main)/hosting/HostReservation";
import SortReservation from "../(main)/hosting/SortReservation";

export default function hosting() {
  return (
    <div className="flex flex-col ">
      <HostHeader />
      <HostReservation />
      <SortReservation />
    </div>
  );
}
