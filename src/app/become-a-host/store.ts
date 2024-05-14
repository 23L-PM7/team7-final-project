import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface BearState {
  type: string;
  roomType: string;
  bedroomCount: number;
  bathroomCount: number;
  guestsCount: number;
  offerType: string;
  title: string;
  description: string;

  setType: (by: string) => void;
  setRoomType: (by: string) => void;
  setBedroomCount: (by: number) => void;
  setBathroomCount: (by: number) => void;
  setGuestCount: (by: number) => void;
  setOfferType: (by: string) => void;
  setTitle: (by: string) => void;
  setDescription: (by: string) => void;
}

export const useBecomeHost = create<BearState>()(
  persist(
    (set) => ({
      type: "",
      roomType: "",
      bedroomCount: 1,
      bathroomCount: 1,
      guestsCount: 1,
      offerType: "",
      title: "",
      description: "",
      setType: (newValue: string) => set(() => ({ type: newValue })),
      setRoomType: (newValue: string) => set(() => ({ roomType: newValue })),
      setBedroomCount: (newValue: number) =>
        set(() => ({ bedroomCount: newValue })),
      setBathroomCount: (newValue: number) =>
        set(() => ({ bathroomCount: newValue })),
      setGuestCount: (newValue: number) =>
        set(() => ({ guestsCount: newValue })),
      setOfferType: (newValue: string) => set(() => ({ offerType: newValue })),
      setTitle: (newValue: string) => set(() => ({ title: newValue })),
      setDescription: (newValue: string) =>
        set(() => ({ description: newValue })),
    }),

    {
      name: "become-host",
    }
  )
);
