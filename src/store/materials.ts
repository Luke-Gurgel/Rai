import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  Material,
  MaterialCategory,
  MaterialInventory,
} from "@/api/types/materials";

export interface MaterialsFilters {
  belowMinQuantity: boolean;
  expired: boolean;
  category: {
    checked: boolean;
    category?: string | null;
  };
}

interface MaterialsState {
  data: Material[];
  categories: MaterialCategory[];
  filters: MaterialsFilters;
}

export const emptyFilters: MaterialsFilters = {
  belowMinQuantity: false,
  expired: false,
  category: { checked: false },
};

const initialState: MaterialsState = {
  data: [],
  categories: [],
  filters: emptyFilters,
};

const materialsSlice = createSlice({
  name: "materials",
  initialState,
  reducers: {
    setCategories(materialsState, action: PayloadAction<MaterialCategory[]>) {
      materialsState.categories = action.payload;
    },
    setMaterials(materialsState, action: PayloadAction<Material[]>) {
      materialsState.data = action.payload;
    },
    filterMaterials(materialsState, action: PayloadAction<MaterialsFilters>) {
      materialsState.filters = action.payload;
    },
    registerMaterial(materialsState, action: PayloadAction<Material>) {
      materialsState.data.push(action.payload);
    },
    updateMaterial(materialsState, action: PayloadAction<Material>) {
      const i = materialsState.data.findIndex(
        (m) => m.materialId === action.payload.materialId
      );
      materialsState.data[i] = action.payload;
    },
    addInventory(
      materialsState,
      action: PayloadAction<{
        materialId: number;
        inventory: MaterialInventory;
      }>
    ) {
      const i = materialsState.data.findIndex(
        (m) => m.materialId === action.payload.materialId
      );
      materialsState.data[i].inventory.push(action.payload.inventory);
    },
    updateInventory(
      materialsState,
      action: PayloadAction<{
        materialId: number;
        inventory: MaterialInventory;
      }>
    ) {
      const materialIdx = materialsState.data.findIndex(
        (m) => m.materialId === action.payload.materialId
      );
      const inventoryIdx = materialsState.data[materialIdx].inventory.findIndex(
        (iv) => iv.inventoryId === action.payload.inventory.inventoryId
      );
      materialsState.data[materialIdx].inventory[inventoryIdx] =
        action.payload.inventory;
    },
  },
});

export const { reducer: materialsReducer } = materialsSlice;
export const materialStore = materialsSlice.actions;

export const getCategoryByName = (
  categories: MaterialCategory[],
  name: string
) => {
  const [category] = categories.filter((c) => c.name === name);
  return category;
};
