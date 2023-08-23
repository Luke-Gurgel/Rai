import { createSlice } from "@reduxjs/toolkit";
import { Material } from "@/api/types/materials";
import type { PayloadAction } from "@reduxjs/toolkit";
import { mockMaterialsData } from "__mocks__/materials";

export interface MaterialsFilters {
  belowMinQuantity: boolean;
}

interface MaterialsState {
  data: Material[];
  filters: MaterialsFilters;
}

const initialState: MaterialsState = {
  data: mockMaterialsData,
  filters: {
    belowMinQuantity: false,
  },
};

const materialsSlice = createSlice({
  name: "materials",
  initialState,
  reducers: {
    setMaterials(materialsState, action: PayloadAction<Material[]>) {
      materialsState.data = action.payload;
    },
    filterMaterials(materialsState, action: PayloadAction<MaterialsFilters>) {
      materialsState.filters = action.payload;
    },
  },
});

export const { reducer: materialsReducer } = materialsSlice;
export const { setMaterials, filterMaterials } = materialsSlice.actions;
