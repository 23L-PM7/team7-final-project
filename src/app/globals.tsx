import { create } from "zustand";
import dayjs from "dayjs";

export const useDate = create((set) => ({
  date: [dayjs("2022-05-15"), dayjs("2022-05-15")],
  setDate: (newDate: Date) => set(() => ({ date: newDate })),
}));

export const useDays = create((set) => ({
  daysNumber: 0,
  setDaysNumber: (newDays: Number) => set(() => ({ daysNumber: newDays })),
}));

export const useGuests = create((set) => ({
  clientNumber: 0,
  setClientNumber: (newNumber: Number) => set(() => ({ clientNumber: newNumber })),
}));

export const useAdult = create((set) => ({
  adultNumber: 0,
  setAdultNumber: (newNumber: Number) => set(() => ({ adultNumber: newNumber })),
}));

export const useChildren = create((set) => ({
  childrenNumber: 0,
  setChildrenNumber: (newNumber: Number) => set(() => ({ childrenNumber: newNumber })),
}));

export const useInfant = create((set) => ({
  infantNumber: 0,
  setInfantNumber: (newNumber: Number) => set(() => ({ infantNumber: newNumber })),
}));

export const usePet = create((set) => ({
  petNumber: 0,
  setPetNumber: (newNumber: Number) => set(() => ({ petNumber: newNumber })),
}));
