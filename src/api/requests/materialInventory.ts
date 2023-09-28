import { env } from "@/utils/env";
import { MaterialInventory } from "../types/materials";

const materialInventoryUrl = env.apiUrl + "/material-inventory";

interface CreateInventoryRequestBody
  extends Omit<MaterialInventory, "inventoryId"> {
  materialId: number;
}

const createMaterialInventory = async (
  materialInventory: CreateInventoryRequestBody
): Promise<number> => {
  const res = await fetch(materialInventoryUrl, {
    method: "POST",
    body: JSON.stringify(materialInventory),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Não foi possível criar novo estoque");
  }

  const { materialId }: { materialId: number } = await res.json();
  return materialId;
};

const updateMaterialInventory = async (
  materialInventory: Partial<CreateInventoryRequestBody>,
  id: number
): Promise<void> => {
  const res = await fetch(materialInventoryUrl + `/${id}`, {
    method: "PATCH",
    body: JSON.stringify(materialInventory),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Não foi possível atualizar estoque");
  }
};

export const materialInventoryAPI = {
  createMaterialInventory,
  updateMaterialInventory,
};
