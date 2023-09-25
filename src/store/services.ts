import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Service } from "@/api/types/services";

interface ServicesState {
  data: Service[];
}

const initialState: ServicesState = {
  data: [],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices(servicesState, action: PayloadAction<Service[]>) {
      servicesState.data = action.payload;
    },
  },
});

export const { reducer: servicesReducer } = servicesSlice;
export const { setServices } = servicesSlice.actions;
