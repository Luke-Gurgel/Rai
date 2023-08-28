import { Material } from "./materials";

export interface Service {
  id: number;
  name: string;
  materials: Material[];
}
