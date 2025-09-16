import { create } from "zustand";

type toggleState = {
  snackbarToggle: boolean;
};

type toggleActions = {
  handleSnackbarToggle: () => void;
};

const initialState: toggleState = {
  snackbarToggle: true,
};

export const useToggle = create<toggleActions & toggleState>()((set) => ({
  ...initialState,
  handleSnackbarToggle: () => set(() => ({ snackbarToggle: false })),
}));
