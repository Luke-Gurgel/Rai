import { Address } from "@/api/types/clients";

export const formatCep = (cep: string): string => {
  return cep.slice(0, 5) + "-" + cep.slice(5);
};

export const formatAddress = (address: Address): string => {
  const { street, number, neighborhood, city, state, cep, complement } =
    address;
  return `${street}, ${number}, ${neighborhood} - ${city}, ${state} - ${formatCep(
    cep
  )}`;
};
