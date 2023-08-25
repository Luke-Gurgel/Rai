import { useForm, RegisterOptions, UseFormReturn } from "react-hook-form";
import { Material, MaterialCategory } from "@/api/types/materials";

interface UseMaterialForm {
  form: UseFormReturn<Material>;
  schema: Map<keyof Material, RegisterOptions>;
}

export const useMaterialForm = (defaultValues?: Material): UseMaterialForm => {
  const form = useForm<Material>({ defaultValues });

  const schema = new Map<keyof Material, RegisterOptions>();

  schema.set("name", { required: "Favor indicar o nome do produto" });

  schema.set("category", {
    required: "Favor indicar a categoria do material",
    validate: {
      options: (value) => {
        return (
          Object.values(MaterialCategory).some((opt) => opt === `${value}`) ||
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
    required: "Favor indicar a quantidade mínima para se ter em estoque",
    min: 1,
  });

  return { form, schema };
};
