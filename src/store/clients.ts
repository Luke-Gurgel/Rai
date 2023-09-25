import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Client } from "@/api/types/clients";

export interface ClientsFilters {
  clientType: {
    checked: boolean;
    type?: "PF" | "PJ";
  };
}

interface ClientsState {
  data: Client<unknown>[];
  filters: ClientsFilters;
}

export const emptyFilters: ClientsFilters = {
  clientType: { checked: false },
};

const initialState: ClientsState = {
  data: [],
  filters: emptyFilters,
};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    setClients(clientsState, action: PayloadAction<Client<unknown>[]>) {
      clientsState.data = action.payload;
    },
    filterClients(clientsState, action: PayloadAction<ClientsFilters>) {
      clientsState.filters = action.payload;
    },
  },
});

export const { reducer: clientsReducer } = clientsSlice;
export const { setClients, filterClients } = clientsSlice.actions;
