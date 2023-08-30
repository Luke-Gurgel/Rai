import { Client } from "./clients";
import { Material } from "./materials";

export interface Service {
  id: number;
  name: string;
  materials: Material[];
}

export interface ServiceOrder {
  id: number;
  service: Service;
  client: Client;
  dateTime: string;
  warranty: number;
  additionalInfo: string;
}
