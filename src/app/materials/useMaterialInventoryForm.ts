import { useForm, RegisterOptions, UseFormReturn } from "react-hook-form";
import { MaterialInventory } from "@/api/types/materials";
import { isFuture } from "date-fns";

interface UseMaterialInventoryForm {
  form: UseFormReturn<MaterialInventory>;
  schema: Map<keyof MaterialInventory, RegisterOptions>;
}

export const useMaterialInventoryForm = (
  defaultValues?: MaterialInventory
): UseMaterialInventoryForm => {
  const form = useForm<MaterialInventory>({
    defaultValues: { ...defaultValues, expDate: "2023-04-05" },
  });

  const schema = new Map<keyof MaterialInventory, RegisterOptions>();

  schema.set("lote", { required: "Favor indicar o lote do produto" });

  schema.set("quantity", {
    valueAsNumber: true,
    required: "Favor indicar a quantidate",
    min: {
      value: 0,
      message: "Quantidade dever ",
    },
  });

  schema.set("expDate", {
    valueAsDate: true,
    required: "Favor indicar a data de validade do produto",
    validate: {
      isFuture: (date) => {
        return isFuture(date) || "Data de validade deve ser futura";
      },
    },
  });

  return { form, schema };
};
