import { env } from "@/utils/env";
import { Material, MaterialCategory } from "../types/materials";

const materialsUrl = env.apiUrl + "/materials";
const materialInventoryUrl = env.apiUrl + "/material-inventory";
const materialCategoryUrl = env.apiUrl + "/material-categories";

export const fetchMaterials = async (): Promise<Material[]> => {
  const res = await fetch(materialsUrl);
  const materials: Material[] = await res.json();
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

interface CreateMaterialRequestBody {
  name: string;
  minQuantity: number;
  grupoQuimico: string;
  principioAtivo: string;
  categoryId: number;
}

export const createMaterial = async (
  material: CreateMaterialRequestBody
): Promise<number> => {
  const res = await fetch(materialsUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(material),
  });
  console.log("RES >>>>", res);
  if (!res.ok) {
    throw new Error("Não foi possível criar novo material");
  }
  const { materialId }: { materialId: number } = await res.json();
  return materialId;
};
