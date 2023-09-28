import { env } from "@/utils/env";
import { Material, MaterialCategory } from "../types/materials";

const materialsUrl = env.apiUrl + "/materials";
const materialCategoryUrl = env.apiUrl + "/material-categories";

const fetchMaterials = async (): Promise<Material[]> => {
  const res = await fetch(materialsUrl);
  const materials: Material[] = await res.json();
  return materials;
};

const fetchMaterialCategories = async (): Promise<MaterialCategory[]> => {
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

const createMaterial = async (
  material: CreateMaterialRequestBody
): Promise<number> => {
  const res = await fetch(materialsUrl, {
    method: "POST",
    body: JSON.stringify(material),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Não foi possível criar novo material");
  }

  const { materialId }: { materialId: number } = await res.json();
  return materialId;
};

const updateMaterial = async (
  material: Partial<CreateMaterialRequestBody>,
  id: number
): Promise<void> => {
  const res = await fetch(materialsUrl + `/${id}`, {
    method: "PATCH",
    body: JSON.stringify(material),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Não foi possível atualizar material");
  }
};

export const materialAPI = {
  fetchMaterials,
  fetchMaterialCategories,
  createMaterial,
  updateMaterial,
};
