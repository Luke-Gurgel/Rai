export enum MaterialCategory {
  RATO = "Rato",
  INSETO = "Inseto",
}

export interface MaterialInventory {
  lote: string;
  quantity: number;
  expDate: string;
}

export interface Material {
  id: number;
  name: string;
  grupoQuimico: string;
  principioAtivo: string;
  category: MaterialCategory;
  totalQuantityInStock: number;
  lastPurchasePrice: number;
  lastPurchaseDate: string;
  minQuantity: number;
  lotes: MaterialInventory[];
}
