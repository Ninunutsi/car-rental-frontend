import { create } from "zustand";

export type FilterFormType = {
  pickUpLocation?: string;
  dropOffLocation?: string;
  pickUpDate?: string;
  pickUpTime?: string;
  dropOffDate?: string;
  dropOffTime?: string;
  ordering?: string;
};

type toggleState = {
  filterQuery: FilterFormType | null;
  typesFilter: string[] | null;
  loading: boolean;
};

type toggleActions = {
  handleLoading: () => void;
  setFilterQuery: (filterData: FilterFormType) => void;
  setTypesFilter: (typesData: string[]) => void;
};

const initialState: toggleState = {
  filterQuery: null,
  typesFilter: null,
  loading: true,
};

export const useFilterMenu = create<toggleState & toggleActions>()((set) => ({
  ...initialState,
  handleLoading: () => set(() => ({ loading: false })),
  setFilterQuery: (filterData) => set(() => ({ filterQuery: filterData })),
  setTypesFilter(typesData) {
    set(() => ({ typesFilter: typesData }));
  },
}));
