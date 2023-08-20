import { Material, MaterialCategory } from "@/api/types/materials";

export const mockMaterialsData: Material[] = [
  {
    id: 1,
    name: "Placa Cola",
    category: MaterialCategory.RATO,
    quantity: 20,
    minQuantity: 5,
    grupoQuimico: "string",
    principioAtivo: "string",
  },
  {
    id: 2,
    name: "Veneno de Barata",
    category: MaterialCategory.INSETO,
    quantity: 10,
    minQuantity: 5,
    grupoQuimico: "string",
    principioAtivo: "string",
  },
  {
    id: 3,
    name: "Germicida",
    category: MaterialCategory.INSETO,
    quantity: 34,
    minQuantity: 10,
    grupoQuimico: "string",
    principioAtivo: "string",
  },
];
