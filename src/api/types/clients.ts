export interface Address {
  street: string;
  number: number;
  neighborhood: string;
  cep: string;
  city: string;
  state: string;
  complement?: string;
}

export interface ClientPF {
  id: number;
  name: string;
  cpf: string;
  tel: string;
  email: string;
  address: Address;
}

export interface ClientPJ {
  id: number;
  fantasyName: string;
  razaoSocial: string;
  cnpj: string;
  tel: string;
  email: string;
  address: Address;
}

export type Client = ClientPF | ClientPJ;
