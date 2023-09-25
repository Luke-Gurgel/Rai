import { env } from "@/utils/env";
import { Client } from "../types/clients";

const clientsUrl = env.apiUrl + "/clients";

export const fetchClients = async (): Promise<Client<unknown>[]> => {
  const res = await fetch(clientsUrl);
  const { clients }: { clients: Client<unknown>[] } = await res.json();
  return clients;
};
