import { useForm, RegisterOptions, UseFormReturn } from "react-hook-form";
import { Service } from "@/api/types/services";

interface UsePFClientForm {
  form: UseFormReturn<Service>;
  schema: Map<keyof Service | keyof Service, RegisterOptions>;
}

export const useServiceForm = (defaultValues?: Service): UsePFClientForm => {
  const form = useForm<Service>({
    defaultValues: {
      name: defaultValues?.name ?? "",
      materials: defaultValues?.materials ?? [],
    },
  });

  const schema = new Map<keyof Service | keyof Service, RegisterOptions>();

  schema.set("name", { required: "Favor indicar o serviço" });

  return { form, schema };
};
