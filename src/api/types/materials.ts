export enum MaterialCategory {
  RATO = "Rato",
  INSETO = "Inseto",
}

export interface Material {
  id: number;
  name: string;
  grupoQuimico: string;
  principioAtivo: string;
  category: MaterialCategory;
  totalQuantityInStock: number;
  minQuantity: number;
  lotes: {
    [lote: string]: { quantity: number; expDate: string };
  };
}
