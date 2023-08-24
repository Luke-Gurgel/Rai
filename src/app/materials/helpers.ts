import { Material } from "@/api/types/materials";
import { MaterialsFilters } from "@/store/materials";

export const getTotalQuantityInInventory = (material: Material) => {
  return material.inventory.reduce((prev, curr) => (prev += curr.quantity), 0);
};

export const isLowInventory = (material: Material) => {
  const totalQuantityInStock = getTotalQuantityInInventory(material);
  return totalQuantityInStock <= material.minQuantity;
};

export const applyMaterialFilters = (
  materials: Material[],
  filters: MaterialsFilters
): Material[] => {
  return materials.filter((material) => {
    return !filters.belowMinQuantity || isLowInventory(material);
  });
};
