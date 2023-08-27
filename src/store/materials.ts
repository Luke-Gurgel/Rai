import { createSlice } from "@reduxjs/toolkit";
import { Material, MaterialCategory } from "@/api/types/materials";
import { mockMaterialsData } from "__mocks__/materials";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MaterialsFilters {
  belowMinQuantity: boolean;
  expired: boolean;
  category: {
    checked: boolean;
    category?: MaterialCategory;
  };
}

interface MaterialsState {
  data: Material[];
  filters: MaterialsFilters;
}

export const emptyFilters: MaterialsFilters = {
  belowMinQuantity: false,
  expired: false,
  category: { checked: false },
};

const initialState: MaterialsState = {
  data: mockMaterialsData,
  filters: emptyFilters,
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
