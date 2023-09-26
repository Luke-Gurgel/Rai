export interface MaterialCategory {
  categoryId: number;
  name: string;
}

export interface MaterialInventory {
  inventoryId: number;
  lote: string;
  expDate: string;
  quantity: number;
  purchaseDate: string;
  price: number;
}

export interface Material {
  materialId: number;
  name: string;
  minQuantity: number;
  grupoQuimico: string;
  principioAtivo: string;
  category: string;
  inventory: MaterialInventory[];
}
