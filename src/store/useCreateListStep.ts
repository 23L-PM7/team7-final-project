import { create } from "zustand";

type CreateListStep = {
  step: number;
  listing: {
    name: string;
    guestCount: number;
  };
  handleNextStep: () => void;
  handlePrevStep: () => void;
  updateListingName: (name: string) => void;
};

export const useCreateListStep = create<CreateListStep>((set) => ({
  step: 0,
  listing: {
    name: "",
    guestCount: 0,
  },
  handleNextStep: () => set((state) => ({ step: state.step + 1 })),
  handlePrevStep: () => set((state) => ({ step: state.step - 1 })),
  updateListingName: (name) =>
    set((state) => ({
      ...state,
      listing: {
        ...state.listing,
        name: name,
      },
    })),
}));
