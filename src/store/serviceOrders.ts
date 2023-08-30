import { createSlice } from "@reduxjs/toolkit";
import { ServiceOrder } from "@/api/types/services";
import type { PayloadAction } from "@reduxjs/toolkit";
import { mockServiceOrders } from "__mocks__/services";

interface ServiceOrdersState {
  data: ServiceOrder[];
}

const initialState: ServiceOrdersState = {
  data: mockServiceOrders,
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
