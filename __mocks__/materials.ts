import { Material, MaterialCategory } from "@/api/types/materials";

export const mockMaterialsData: Material[] = [
  {
    id: 1,
    name: "Placa Cola",
    category: MaterialCategory.RATO,
    minQuantity: 5,
    grupoQuimico: "sei la",
    principioAtivo: "sei la",
    inventory: [
      {
        lote: "USO78956454",
        expDate: "2030-04-23",
        purchaseDate: "2023-07-23",
        price: 49.99,
        quantity: 10,
      },
      {
        lote: "USO789das89",
        expDate: "2030-05-25",
        purchaseDate: "2023-08-25",
        price: 49.99,
        quantity: 10,
      },
    ],
  },
  {
    id: 2,
    name: "Veneno de Barata",
    category: MaterialCategory.INSETO,
    minQuantity: 5,
    grupoQuimico: "sei la",
    principioAtivo: "sei la",
    inventory: [
      {
        lote: "USO789dsan9",
        expDate: "2024-02-25",
        purchaseDate: "2023-06-25",
        price: 29.99,
        quantity: 7,
      },
      {
        lote: "USO709duas7",
        expDate: "2024-04-25",
        purchaseDate: "2023-07-25",
        price: 29.99,
        quantity: 1,
      },
      {
        lote: "USOjdas98ss",
        expDate: "2023-04-25",
        purchaseDate: "2023-03-25",
        price: 19.99,
        quantity: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Germicida",
    category: MaterialCategory.INSETO,
    minQuantity: 10,
    grupoQuimico: "sei la",
    principioAtivo: "sei la",
    inventory: [
      {
        lote: "UDISA90dsa90",
        expDate: "2024-02-25",
        purchaseDate: "2023-08-25",
        price: 100,
        quantity: 7,
      },
    ],
  },
  {
    id: 4,
    name: "Inseticidas",
    category: MaterialCategory.INSETO,
    minQuantity: 10,
    grupoQuimico: "sei la",
    principioAtivo: "sei la",
    inventory: [
      {
        lote: "UDISA90dsa90",
        expDate: "2022-02-25",
        purchaseDate: "2022-08-25",
        price: 100,
        quantity: 7,
      },
    ],
  },
];
