import { Service, ServiceOrder } from "@/api/types/services";
import { MaterialCategory } from "@/api/types/materials";
import { mockMaterialsData } from "./materials";
import { clientPFExample, clientPJExample } from "./clients";

export const mockServices: Service[] = [
  {
    id: 1342,
    name: "Exterminação de ratos",
    materials: mockMaterialsData.filter(
      (material) => material.category === MaterialCategory.RATO
    ),
  },
  {
    id: 2334,
    name: "Controle de Abelhas e Vespas",
    materials: mockMaterialsData.filter(
      (material) => material.category === MaterialCategory.INSETO
    ),
  },
];

export const mockServiceOrders: ServiceOrder[] = [
  {
    id: 3219,
    client: clientPFExample,
    service: mockServices[0],
    dateTime: "2023-09-01T14:30",
    additionalInfo: "Levar bolo",
    warranty: 90,
  },
  {
    id: 3291,
    client: clientPJExample,
    service: mockServices[1],
    dateTime: "2023-08-30T09:45",
    additionalInfo: "Comer bolo",
    warranty: 45,
  },
  {
    id: 3292,
    client: clientPFExample,
    service: mockServices[1],
    dateTime: "2023-08-30T13:00",
    additionalInfo: "Comprar bolo",
    warranty: 30,
  },
];
