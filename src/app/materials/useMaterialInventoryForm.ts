import { useForm, RegisterOptions, UseFormReturn } from "react-hook-form";
import { MaterialInventory } from "@/api/types/materials";

interface UseMaterialInventoryForm {
  form: UseFormReturn<MaterialInventory>;
  schema: Map<keyof MaterialInventory, RegisterOptions>;
}

export const useMaterialInventoryForm = (
  defaultValues?: MaterialInventory
): UseMaterialInventoryForm => {
  const form = useForm<MaterialInventory>({ defaultValues });

  const schema = new Map<keyof MaterialInventory, RegisterOptions>();
  schema.set("lote", { required: "Favor indicar o lote do produto" });
  schema.set("quantity", { required: "Favor indicar a quantidate" });
  schema.set("expDate", {
    required: "Favor indicar a data de validade do produto",
  });

  return { form, schema };
};
