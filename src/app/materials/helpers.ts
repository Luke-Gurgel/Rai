import { Material } from "@/api/types/materials";
import { MaterialsFilters } from "@/store/materials";

export const isLowInventory = (material: Material) => {
  return material.totalQuantityInStock <= material.minQuantity;
};

export const applyMaterialFilters = (
  materials: Material[],
  filters: MaterialsFilters
): Material[] => {
  return materials.filter((material) => {
    return !filters.belowMinQuantity || isLowInventory(material);
  });
};
