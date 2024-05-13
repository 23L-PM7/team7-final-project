import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface BearState {
  type: string;
  roomType: string;
  bedroomCount: number;

  setType: (by: string) => void;
  setRoomType: (by: string) => void;
  setBedroomCount: (by: number) => void;
}

export const useBecomeHost = create<BearState>()(
  persist(
    (set) => ({
      type: "",
      roomType: "",
      bedroomCount: 1,
      setType: (newValue: string) => set(() => ({ type: newValue })),
      setRoomType: (newValue: string) => set(() => ({ roomType: newValue })),
      setBedroomCount: (newValue: number) =>
        set(() => ({ bedroomCount: newValue })),
    }),
    {
      name: "become-host",
    }
  )
);
