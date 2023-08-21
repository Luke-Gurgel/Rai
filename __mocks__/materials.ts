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
    lastPurchasePrice: 49.99,
    lastPurchaseDate: "23/03/2023",
    lotes: [
      { lote: "USO78956454", quantity: 10, expDate: "25/02/2030" },
      { lote: "USO789das89", quantity: 10, expDate: "25/04/2030" },
    ],
  },
  {
    id: 2,
    name: "Veneno de Barata",
    category: MaterialCategory.INSETO,
    totalQuantityInStock: 10,
    minQuantity: 5,
    grupoQuimico: "string",
    principioAtivo: "string",
    lastPurchasePrice: 23,
    lastPurchaseDate: "23/03/2023",
    lotes: [
      { lote: "USO789dsan9", quantity: 7, expDate: "25/02/2024" },
      { lote: "USO709duas7", quantity: 1, expDate: "25/04/2024" },
      { lote: "USOjdas98ss", quantity: 2, expDate: "25/04/2024" },
    ],
  },
  {
    id: 3,
    name: "Germicida",
    category: MaterialCategory.INSETO,
    totalQuantityInStock: 7,
    minQuantity: 10,
    grupoQuimico: "string",
    principioAtivo: "string",
    lastPurchasePrice: 12,
    lastPurchaseDate: "23/03/2023",
    lotes: [{ lote: "UDISA90dsa90", quantity: 7, expDate: "25/02/2024" }],
  },
];
