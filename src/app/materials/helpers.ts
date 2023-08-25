import { isAfter } from "date-fns";
import { Material } from "@/api/types/materials";
import { MaterialsFilters } from "@/store/materials";

export const getTotalQuantityInInventory = (material: Material) => {
  return material.inventory.reduce((prev, curr) => (prev += curr.quantity), 0);
};

export const isLowInventory = (material: Material) => {
  const totalQuantityInStock = getTotalQuantityInInventory(material);
  return totalQuantityInStock <= material.minQuantity;
};

export const containsExpiredInventory = (material: Material) => {
  let expired = false;
  const today = new Date();
  for (const unit of material.inventory) {
    const expDate = new Date(unit.expDate);
    if (isAfter(today, expDate)) {
      expired = true;
    }
  }
  return expired;
};

export const applyMaterialFilters = (
  materials: Material[],
  filters: MaterialsFilters
): Material[] => {
  return materials.filter((material) => {
    return (
      (!filters.belowMinQuantity || isLowInventory(material)) &&
      (!filters.expired || containsExpiredInventory(material))
    );
  });
};
