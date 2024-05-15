import { create } from "zustand";
import dayjs, { Dayjs } from "dayjs";

export const useDate = create((set) => ({
  date: [dayjs("2022-05-15"), dayjs("2022-05-15")],
  setDate: (newDate: Date) => set(() => ({ date: newDate })),
}));

export const useGuests = create((set) => ({
  clientNumber: 0,
  setClientNumber: (newNumber: Number) => set(() => ({ clientNumber: newNumber })),
}));
