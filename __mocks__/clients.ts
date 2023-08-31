import { Client, ClientPF, ClientPJ, Address } from "@/api/types/clients";

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

export const clientPFExample: ClientPF = {
  id: 1,
  name: "Fulano da Silva",
  cpf: "05340300501",
  tel: "21987654321",
  email: "fulano@example.com",
  address: addressExample,
};

export const clientPJExample: ClientPJ = {
  id: 2,
  fantasyName: "Empresa Fantástica",
  razaoSocial: "Razão Social Ltda.",
  cnpj: "42266567000154",
  tel: "11956789012",
  email: "empresa@example.com",
  address: addressExample,
};

export const clientPFExample2: ClientPF = {
  id: 3,
  name: "Ciclana Souza",
  cpf: "05340300501",
  tel: "51998765432",
  email: "ciclana@example.com",
  address: addressExample2,
};

export const clientPFExample3: ClientPF = {
  id: 4,
  name: "Beltrano Oliveira",
  cpf: "05340300501",
  tel: "31987652109",
  email: "beltrano@example.com",
  address: addressExample3,
};

export const clientPJExample2: ClientPJ = {
  id: 5,
  fantasyName: "Empreendimentos Real",
  razaoSocial: "Razão Real Ltda.",
  cnpj: "42266567000154",
  tel: "47987654321",
  email: "empreendimentos@example.com",
  address: addressExample2,
};

export const clientPJExample3: ClientPJ = {
  id: 6,
  fantasyName: "Comércio Vivo",
  razaoSocial: "Razão Viva Ltda.",
  cnpj: "42266567000154",
  tel: "81912345678",
  email: "comercio@example.com",
  address: addressExample3,
};

export const mockClients: Client[] = [
  clientPFExample,
  clientPJExample,
  clientPFExample2,
  clientPFExample3,
  clientPJExample2,
  clientPJExample3,
];
