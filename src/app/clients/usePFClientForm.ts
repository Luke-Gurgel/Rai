import { useForm, RegisterOptions, UseFormReturn } from "react-hook-form";
import { ClientPF } from "@/api/types/clients";

interface UsePFClientForm {
  form: UseFormReturn<ClientPF>;
  schema: Map<keyof ClientPF, RegisterOptions>;
}

export const usePFClientForm = (defaultValues?: ClientPF): UsePFClientForm => {
  const form = useForm<ClientPF>({ defaultValues });

  const schema = new Map<keyof ClientPF, RegisterOptions>();

  schema.set("name", { required: "Favor indicar o nome do cliente" });
  schema.set("cpf", { required: "Favor indicar o cpf do cliente" });
  schema.set("email", { required: "Favor indicar o email do cliente" });
  schema.set("tel", { required: "Favor indicar o tel. do cliente" });

  return { form, schema };
};
