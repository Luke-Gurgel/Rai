import { env } from "@/utils/env";
import { Material, MaterialCategory } from "../types/materials";

const materialsUrl = env.apiUrl + "/materials";
const materialInventoryUrl = env.apiUrl + "/material-inventory";
const materialCategoryUrl = env.apiUrl + "/material-categories";

export const fetchMaterials = async (): Promise<Material[]> => {
  const res = await fetch(materialsUrl);
  const { materials }: { materials: Material[] } = await res.json();
  return materials;
};

export const fetchMaterialCategories = async (): Promise<
  MaterialCategory[]
> => {
  const res = await fetch(materialCategoryUrl);
  const { materialCategories }: { materialCategories: MaterialCategory[] } =
    await res.json();
  return materialCategories;
};
