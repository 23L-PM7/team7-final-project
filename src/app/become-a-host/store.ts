import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BearState {
  type: string;
  roomType: string;
  bedroomCount: number;
  bathroomCount: number;
  guestsCount: number;
  bedCount: number;
  offerTypes: string[];
  title: string;
  description: string;
  price: number;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  location: string;
  region: string;

  setType: (by: string) => void;
  setRoomType: (by: string) => void;
  setBedroomCount: (by: number) => void;
  setBathroomCount: (by: number) => void;
  setGuestCount: (by: number) => void;
  setBedCount: (by: number) => void;
  setOfferTypes: (by: string[]) => void;
  setTitle: (by: string) => void;
  setDescription: (by: string) => void;
  setPrice: (by: number) => void;
  setImage: (by: string) => void;
  setImage1: (by: string) => void;
  setImage2: (by: string) => void;
  setImage3: (by: string) => void;
  setImage4: (by: string) => void;
  setImage5: (by: string) => void;
  setLocation: (by: string) => void;
  setRegion: (by: string) => void;
}

export const useBecomeHost = create<BearState>()(
  persist(
    (set) => ({
      type: "",
      roomType: "",
      bedroomCount: 1,
      bathroomCount: 1,
      guestsCount: 1,
      offerTypes: [],
      title: "",
      description:
        "  You'll always remember your time at this unique place to stay.",
      price: 15,
      image: "",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      bedCount: 1,
      location: "",
      region: "",

      setType: (newValue: string) => set(() => ({ type: newValue })),
      setRoomType: (newValue: string) => set(() => ({ roomType: newValue })),
      setBedroomCount: (newValue: number) =>
        set(() => ({ bedroomCount: newValue })),
      setBathroomCount: (newValue: number) =>
        set(() => ({ bathroomCount: newValue })),
      setGuestCount: (newValue: number) =>
        set(() => ({ guestsCount: newValue })),
      setOfferTypes: (newValue: string[]) =>
        set(() => ({ offerTypes: newValue })),
      setTitle: (newValue: string) => set(() => ({ title: newValue })),
      setDescription: (newValue: string) =>
        set(() => ({ description: newValue })),
      setPrice: (newValue: number) => set(() => ({ price: newValue })),
      setImage: (newValue: string) => set(() => ({ image: newValue })),
      setImage1: (newValue: string) => set(() => ({ image1: newValue })),
      setImage2: (newValue: string) => set(() => ({ image2: newValue })),
      setImage3: (newValue: string) => set(() => ({ image3: newValue })),
      setImage4: (newValue: string) => set(() => ({ image4: newValue })),
      setImage5: (newValue: string) => set(() => ({ image5: newValue })),
      setBedCount: (newValue: number) => set(() => ({ bedCount: newValue })),
      setLocation: (newValue: string) => set(() => ({ location: newValue })),
      setRegion: (newValue: string) => set(() => ({ region: newValue })),
    }),

    {
      name: "become-host",
    }
  )
);
