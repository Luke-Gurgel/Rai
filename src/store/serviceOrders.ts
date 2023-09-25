import { createSlice } from "@reduxjs/toolkit";
import { ServiceOrder } from "@/api/types/services";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ServiceOrdersState {
  data: ServiceOrder[];
}

const initialState: ServiceOrdersState = {
  data: [],
};

const serviceOrdersSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServiceOrders(
      serviceOrdersState,
      action: PayloadAction<ServiceOrder[]>
    ) {
      serviceOrdersState.data = action.payload;
    },
  },
});

export const { reducer: serviceOrdersReducer } = serviceOrdersSlice;
export const { setServiceOrders } = serviceOrdersSlice.actions;
