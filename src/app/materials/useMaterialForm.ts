import { useForm, RegisterOptions, UseFormReturn } from "react-hook-form";
import { Material } from "@/api/types/materials";
import { useAppSelector } from "@/store/hooks";

export interface MaterialFormData {
  name: string;
  minQuantity: number;
  grupoQuimico: string;
  principioAtivo: string;
  category: string;
}

interface UseMaterialForm {
  form: UseFormReturn<MaterialFormData>;
  schema: Map<keyof MaterialFormData, RegisterOptions>;
}

export const useMaterialForm = (defaultValues?: Material): UseMaterialForm => {
  const { categories } = useAppSelector((state) => state.materials);
  const form = useForm<MaterialFormData>({ defaultValues, mode: "all" });

  const schema = new Map<keyof MaterialFormData, RegisterOptions>();

  schema.set("name", { required: "Favor indicar o nome do produto" });

  schema.set("category", {
    required: "Favor indicar a categoria do material",
    validate: {
      options: (value) => {
        return (
          categories.some((category) => category.name === `${value}`) ||
          "Favor selecionar uma dentre as categorias disponíveis"
        );
      },
    },
  });

  schema.set("grupoQuimico", {
    required: "Favor indicar o grupo químico do material",
  });

  schema.set("principioAtivo", {
    required: "Favor indicar o princípio ativo do material",
  });

  schema.set("minQuantity", {
    valueAsNumber: true,
    required: "Favor indicar a quantidade mínima para se ter em estoque",
    min: {
      value: 1,
      message: "Favor indicar uma quantidade mínima válida",
    },
  });

  return { form, schema };
};
