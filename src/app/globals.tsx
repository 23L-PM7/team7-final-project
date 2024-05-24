"use client";

import { create } from "zustand";
import * as React from "react";
import { DateRange } from "@mui/x-date-pickers-pro/models";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

// for reservation dates

export const useDate = create((set) => ({
  date: [dayjs(Date.now()), dayjs(Date.now())],
  setDate: (newDate: Date) => set(() => ({ date: newDate })),
  getFormattedDate: (date: Dayjs) => date.format('MMM D'),
}));

export const useDays = create((set) => ({
  daysNumber: 0,
  setDaysNumber: (newDays: Number) => set(() => ({ daysNumber: newDays })),
}));

// for reservation price

export const usePayment = create((set) => ({
  totalPayment: 0,
  setTotalPayment: (newNumber: Number) =>
    set(() => ({ totalPayment: newNumber })),
}));

// for reservation guests

export const useGuests = create((set) => ({
  clientNumber: 0,
  setClientNumber: (newNumber: Number) =>
    set(() => ({ clientNumber: newNumber })),
}));

export const useAdult = create((set) => ({
  adultNumber: 0,
  setAdultNumber: (newNumber: Number) =>
    set(() => ({ adultNumber: newNumber })),
}));

export const useChildren = create((set) => ({
  childrenNumber: 0,
  setChildrenNumber: (newNumber: Number) =>
    set(() => ({ childrenNumber: newNumber })),
}));

export const useInfant = create((set) => ({
  infantNumber: 0,
  setInfantNumber: (newNumber: Number) =>
    set(() => ({ infantNumber: newNumber })),
}));

export const usePet = create((set) => ({
  petNumber: 0,
  setPetNumber: (newNumber: Number) => set(() => ({ petNumber: newNumber })),
}));

// for listing details

export const useListingDetails = create((set) => ({
  listingDetails: [],
  setListingDetails: (newList: any) => set(() => ({ listingDetails: newList })),
}));
