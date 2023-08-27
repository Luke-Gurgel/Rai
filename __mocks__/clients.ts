import { Client, ClientPF, ClientPJ, Address } from "@/api/types/clients";

const addressExample: Address = {
  street: "Rua Principal",
  number: 123,
  neighborhood: "Bairro Central",
  cep: 12345,
  city: "Cidade Grande",
  state: "SG",
  complement: "Apartamento 4A",
};

const addressExample2: Address = {
  street: "Avenida Central",
  number: 456,
  neighborhood: "Bairro Novo",
  cep: 54321,
  city: "Cidade Pequena",
  state: "SP",
};

const addressExample3: Address = {
  street: "Rua das Flores",
  number: 789,
  neighborhood: "Bairro Colorido",
  cep: 98765,
  city: "Cidade Alegre",
  state: "CA",
  complement: "Casa Amarela",
};

const clientPFExample: ClientPF = {
  id: 1,
  name: "Fulano da Silva",
  cpf: 12345678900,
  tel: 9876543210,
  email: "fulano@example.com",
  address: addressExample,
};

const clientPJExample: ClientPJ = {
  id: 2,
  fantasyName: "Empresa Fantástica",
  razaoSocial: "Razão Social Ltda.",
  cnpj: 98765432100001,
  tel: 1234567890,
  email: "empresa@example.com",
  address: addressExample,
};

const clientPFExample2: ClientPF = {
  id: 3,
  name: "Ciclana Souza",
  cpf: 98765432101,
  tel: 5678901234,
  email: "ciclana@example.com",
  address: addressExample2,
};

const clientPFExample3: ClientPF = {
  id: 4,
  name: "Beltrano Oliveira",
  cpf: 54321678901,
  tel: 6789012345,
  email: "beltrano@example.com",
  address: addressExample3,
};

const clientPJExample2: ClientPJ = {
  id: 5,
  fantasyName: "Empreendimentos Real",
  razaoSocial: "Razão Real Ltda.",
  cnpj: 45678901234567,
  tel: 1234567890,
  email: "empreendimentos@example.com",
  address: addressExample2,
};

const clientPJExample3: ClientPJ = {
  id: 6,
  fantasyName: "Comércio Vivo",
  razaoSocial: "Razão Viva Ltda.",
  cnpj: 78901234567890,
  tel: 2345678901,
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
