import { Service } from "@/api/types/services";
import { MaterialCategory } from "@/api/types/materials";
import { mockMaterialsData } from "./materials";

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
