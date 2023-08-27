export interface Address {
  street: string;
  number: number;
  cep: number;
  neighborhood: string;
  complement?: string;
  refPoint?: string;
}

export interface ClientPF {
  id: number;
  name: string;
  cpf: number;
  tel: number;
  email: string;
  address: Address;
}

export interface ClientPJ {
  id: number;
  fantasyName: string;
  razaoSocial: string;
  cnpj: number;
  tel: number;
  email: string;
  address: Address;
}
