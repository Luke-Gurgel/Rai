import { Address } from "@/api/types/clients";

export const formatCep = (cep: string): string => {
  const cepDigits = cep.replace(/\D/g, "");

  if (cepDigits.length !== 8) {
    throw new Error("CEP inválido");
  }

  return cep.slice(0, 5) + "-" + cep.slice(5);
};

export const formatAddress = (address: Address): string => {
  const { street, number, neighborhood, city, state, cep } = address;
  return `${street}, ${number}, ${neighborhood} - ${city}, ${state} - ${formatCep(
    cep
  )}`;
};
