export enum MaterialCategory {
  RATO = "RATO",
  INSETO = "INSETO",
  FERTILIZER = "FERTILIZER",
  HERBICIDE = "HERBICIDE",
}

export interface MaterialInventory {
  lote: string;
  expDate: string;
  quantity: number;
  purchaseDate: string;
  price: number;
}

export interface Material {
  id: number;
  name: string;
  minQuantity: number;
  grupoQuimico: string;
  principioAtivo: string;
  category: MaterialCategory;
  inventory: MaterialInventory[];
}
