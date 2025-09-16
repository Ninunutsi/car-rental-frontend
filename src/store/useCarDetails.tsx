import { create } from "zustand";

interface additionalServicesI {
  id: number;
  service_name: string;
  quantity: number;
  price: string;
}

type useCarDetailsState = {
  optionalServices: additionalServicesI[] | null;
};

type useCarDetailsActions = {
  setOptionalServices: (optionalServices: any) => void;
};

const initialState: useCarDetailsState = {
  optionalServices: null,
};

export const useCarDetails = create<
  useCarDetailsState & useCarDetailsActions
>()((set) => ({
  ...initialState,
  setOptionalServices: (optionalServices: additionalServicesI[]) =>
    set(() => ({ optionalServices: optionalServices })),
}));
