export enum MaterialCategory {
  RATO = "Rato",
  INSETO = "Inseto",
}

export interface Material {
  id: number;
  name: string;
  quantity: number;
  minQuantity: number;
  grupoQuimico: string;
  principioAtivo: string;
  category: MaterialCategory;
}
