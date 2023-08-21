import { Material, MaterialCategory } from "@/api/types/materials";

export const mockMaterialsData: Material[] = [
  {
    id: 1,
    name: "Placa Cola",
    category: MaterialCategory.RATO,
    totalQuantityInStock: 20,
    minQuantity: 5,
    grupoQuimico: "string",
    principioAtivo: "string",
    lotes: {
      USO78956454: { quantity: 10, expDate: "25/02/2030" },
      USO789das89: { quantity: 10, expDate: "25/04/2030" },
    },
  },
  {
    id: 2,
    name: "Veneno de Barata",
    category: MaterialCategory.INSETO,
    totalQuantityInStock: 10,
    minQuantity: 5,
    grupoQuimico: "string",
    principioAtivo: "string",
    lotes: {
      USO789dsan9: { quantity: 7, expDate: "25/02/2024" },
      USO709duas7: { quantity: 1, expDate: "25/04/2024" },
      USOjdas98ss: { quantity: 2, expDate: "25/04/2024" },
    },
  },
  {
    id: 3,
    name: "Germicida",
    category: MaterialCategory.INSETO,
    totalQuantityInStock: 7,
    minQuantity: 10,
    grupoQuimico: "string",
    principioAtivo: "string",
    lotes: {
      UDISA90dsa90: { quantity: 7, expDate: "25/02/2024" },
    },
  },
];
