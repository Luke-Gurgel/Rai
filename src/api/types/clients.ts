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
  type: "PF";
  name: string;
  cpf: string;
}

export interface ClientPJ {
  type: "PJ";
  fantasyName: string;
  razaoSocial: string;
  cnpj: string;
}

export type ClientType = "PF" | "PJ" | unknown;

export type Client<ClientType> = {
  clientId: number;
  tel: string;
  email: string;
  address: Address;
  type: ClientType;
} & (ClientPF | ClientPJ);
