import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Material } from "@/api/types/materials";
import { mockMaterialsData } from "__mocks__/materials";

const initialState: Material[] = mockMaterialsData;

const materialsSlice = createSlice({
  name: "materials",
  initialState,
  reducers: {
    setMaterials(state, action: PayloadAction<Material[]>) {
      state = action.payload;
    },
  },
});

export const { setMaterials } = materialsSlice.actions;
export const { reducer: materialsReducer } = materialsSlice;
