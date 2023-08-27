import { useForm, RegisterOptions, UseFormReturn } from "react-hook-form";
import { ClientPJ } from "@/api/types/clients";
import { NestedKeyOf } from "@/utils/types";

interface UsePJClientForm {
  form: UseFormReturn<ClientPJ>;
  schema: Map<keyof ClientPJ | keyof NestedKeyOf<ClientPJ>, RegisterOptions>;
}

export const usePJClientForm = (defaultValues?: ClientPJ): UsePJClientForm => {
  const form = useForm<ClientPJ>({ defaultValues });

  const schema = new Map<
    keyof ClientPJ | keyof NestedKeyOf<ClientPJ>,
    RegisterOptions
  >();

  schema.set("fantasyName", { required: "Favor indicar o nome do cliente" });
  schema.set("razaoSocial", { required: "Favor indicar o cpf do cliente" });
  schema.set("cnpj", { required: "Favor indicar o cpf do cliente" });
  schema.set("email", { required: "Favor indicar o email do cliente" });
  schema.set("tel", { required: "Favor indicar o tel. do cliente" });
  schema.set("address.street", {
    required: "Favor indicar a rua do end.",
  });
  schema.set("address.number", {
    required: "Favor indicar o número do edf.",
  });
  schema.set("address.neighborhood", {
    required: "Favor indicar o bairro do end.",
  });
  schema.set("address.cep", {
    required: "Favor indicar o cep do end.",
  });
  schema.set("address.city", {
    required: "Favor indicar a cidade",
  });
  schema.set("address.state", {
    required: "Favor indicar o estado",
  });
  schema.set("address.complement", {});

  return { form, schema };
};
