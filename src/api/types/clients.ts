export interface Address {
  street: string;
  number: number;
  neighborhood: string;
  cep: number;
  city: string;
  state: string;
  complement?: string;
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

export type Client = ClientPF | ClientPJ;
