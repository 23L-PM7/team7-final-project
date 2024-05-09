import { create } from "zustand";

export const useCheckIn = create((set) => ({
    checkIn: Date.now,
    setCheckIn: (selectCheckIn: Date) =>
      set(() => ({ checkIn: selectCheckIn })),
  }));

export const useCheckOut = create((set) => ({
    checkOut: Date.now,
    setCheckOut: (selectCheckOut: Date) =>
      set(() => ({ checkOut: selectCheckOut })),
  }));