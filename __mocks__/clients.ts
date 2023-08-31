import { Client, Address } from "@/api/types/clients";

export const addressExample: Address = {
  street: "Rua Principal",
  number: 123,
  neighborhood: "Bairro Central",
  cep: "41701015",
  city: "Cidade Grande",
  state: "SG",
  complement: "Apartamento 4A",
};

export const addressExample2: Address = {
  street: "Avenida Central",
  number: 456,
  neighborhood: "Bairro Novo",
  cep: "40150140",
  city: "Cidade Pequena",
  state: "SP",
};

export const addressExample3: Address = {
  street: "Rua das Flores",
  number: 789,
  neighborhood: "Bairro Colorido",
  cep: "41250587",
  city: "Cidade Alegre",
  state: "CA",
  complement: "Casa Amarela",
};

export const clientPFExample: Client<"PF"> = {
  id: 1,
  type: "PF",
  name: "Fulano da Silva",
  cpf: "05340300501",
  tel: "21987654321",
  email: "fulano@example.com",
  address: addressExample,
};

export const clientPJExample: Client<"PJ"> = {
  id: 2,
  type: "PJ",
  fantasyName: "Empresa Fantástica",
  razaoSocial: "Razão Social Ltda.",
  cnpj: "42266567000154",
  tel: "11956789012",
  email: "empresa@example.com",
  address: addressExample,
};

export const clientPFExample2: Client<"PF"> = {
  id: 3,
  type: "PF",
  name: "Ciclana Souza",
  cpf: "05340300501",
  tel: "51998765432",
  email: "ciclana@example.com",
  address: addressExample2,
};

export const clientPFExample3: Client<"PF"> = {
  id: 4,
  type: "PF",
  name: "Beltrano Oliveira",
  cpf: "05340300501",
  tel: "31987652109",
  email: "beltrano@example.com",
  address: addressExample3,
};

export const clientPJExample2: Client<"PJ"> = {
  id: 5,
  type: "PJ",
  fantasyName: "Empreendimentos Real",
  razaoSocial: "Razão Real Ltda.",
  cnpj: "42266567000154",
  tel: "47987654321",
  email: "empreendimentos@example.com",
  address: addressExample2,
};

export const clientPJExample3: Client<"PJ"> = {
  id: 6,
  type: "PJ",
  fantasyName: "Comércio Vivo",
  razaoSocial: "Razão Viva Ltda.",
  cnpj: "42266567000154",
  tel: "81912345678",
  email: "comercio@example.com",
  address: addressExample3,
};

export const mockClients: Client<unknown>[] = [
  clientPFExample,
  clientPJExample,
  clientPFExample2,
  clientPFExample3,
  clientPJExample2,
  clientPJExample3,
];
