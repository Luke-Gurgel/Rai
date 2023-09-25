import { useForm, RegisterOptions, UseFormReturn } from "react-hook-form";
import { MaterialInventory } from "@/api/types/materials";
import { isFuture, isPast } from "date-fns";

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

  schema.set("quantity", {
    valueAsNumber: true,
    required: "Favor indicar a quantidate",
    min: {
      value: 0,
      message: "Quantidade dever igual ou maior que zero",
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

  schema.set("price", {
    required: "Favor indicar a preço da compra",
  });

  schema.set("purchaseDate", {
    valueAsDate: true,
    required: "Favor indicar a data da compra",
    validate: {
      isPast: (date) => {
        return isPast(date) || "Data da compra não pode ser futura";
      },
    },
  });

  return { form, schema };
};
