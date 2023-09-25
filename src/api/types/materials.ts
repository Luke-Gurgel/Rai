export interface MaterialCategory {
  categoryId: number;
  name: string;
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
  categoryId: number;
  inventory: MaterialInventory[];
}
