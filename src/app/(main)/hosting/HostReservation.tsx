import axios from "axios";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/joy";
import { HostingPageCard } from "../../../components/homePageCard/HostingPageCard";
import HostingModal from "../../../components/modal/HostingModal";

export default function HostReservation() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCards = async () => {
    setLoading(true);
    await axios
      .get("http://localhost:3000/api/listing")
      .then((cards) => setCards(cards.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const getUserCards = (cards: any) => {
    const res = cards.filter((card: any) => card.userId === "testUser");
    return res;
  };

  return (
    <div className="flex flex-col container mx-auto  ">
      <div className=" flex  justify-between mb-10">
        <h1 className="text-[32px] font-semibold text-black">Welcome, Host!</h1>
        <div>
          <HostingModal />
        </div>
      </div>
      <div>
        {!!loading && (
          <div>
            <LinearProgress />
          </div>
        )}
        {!loading && <HostingPageCard cards={getUserCards(cards)} />}
      </div>
      <div className=" flex  justify-between mb-10 ">
        <h1 className="text-[30px] font-medium text-black">
          Your reservations
        </h1>
        <button className="text-black rounded-xl underline font hover:bg-slate-100 duration-200 py-1 px-4 h-[34px] font-medium justify-center items-center text-lg border-black">
          All reservations({})
        </button>
      </div>
    </div>
  );
}
