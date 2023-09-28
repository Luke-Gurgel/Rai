import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Material, MaterialCategory } from "@/api/types/materials";

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
    setCategories(materialsState, action: PayloadAction<MaterialCategory[]>) {
      materialsState.categories = action.payload;
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
