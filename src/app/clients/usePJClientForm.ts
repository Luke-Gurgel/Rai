import { useForm, RegisterOptions, UseFormReturn } from "react-hook-form";
import { ClientPJ } from "@/api/types/clients";

interface UsePJClientForm {
  form: UseFormReturn<ClientPJ>;
  schema: Map<keyof ClientPJ, RegisterOptions>;
}

export const usePJClientForm = (defaultValues?: ClientPJ): UsePJClientForm => {
  const form = useForm<ClientPJ>({ defaultValues });

  const schema = new Map<keyof ClientPJ, RegisterOptions>();

  schema.set("fantasyName", { required: "Favor indicar o nome do cliente" });
  schema.set("razaoSocial", { required: "Favor indicar o cpf do cliente" });
  schema.set("cnpj", { required: "Favor indicar o cpf do cliente" });
  schema.set("email", { required: "Favor indicar o email do cliente" });
  schema.set("tel", { required: "Favor indicar o tel. do cliente" });

  return { form, schema };
};
