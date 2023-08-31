import { useForm, RegisterOptions, UseFormReturn } from "react-hook-form";
import { Client } from "@/api/types/clients";
import { NestedKeyOf } from "@/utils/types";
import { validateCnpj } from "@/utils/cnpj";

interface UsePJClientForm {
  form: UseFormReturn<Client<"PJ">>;
  schema: Map<
    keyof Client<"PJ"> | keyof NestedKeyOf<Client<"PJ">>,
    RegisterOptions
  >;
}

export const usePJClientForm = (
  defaultValues?: Client<"PJ">
): UsePJClientForm => {
  const form = useForm<Client<"PJ">>({ defaultValues });

  const schema = new Map<
    keyof Client<"PJ"> | keyof NestedKeyOf<Client<"PJ">>,
    RegisterOptions
  >();

  schema.set("fantasyName", { required: "Favor indicar o nome do cliente" });
  schema.set("razaoSocial", { required: "Favor indicar o cpf do cliente" });
  schema.set("cnpj", {
    required: "Favor indicar o cpf do cliente",
    validate: {
      invalid: (val) => {
        return validateCnpj(val) || "este cnpj é inválido";
      },
    },
  });
  schema.set("email", {
    required: "Favor indicar o email do cliente",
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  });
  schema.set("tel", {
    required: "Favor indicar o tel. do cliente",
    minLength: { value: 10, message: "tel tem menos de 10 dígitos" },
    maxLength: { value: 11, message: "tel tem mais de 11 dígitos" },
    validate: {
      NaN: (val) => {
        return (
          typeof val === "number" ||
          "tel deve ser uma sequência de 10-11 números"
        );
      },
    },
  });
  schema.set("address.cep", {
    required: "Favor indicar o cep do end.",
    minLength: { value: 5, message: "Favor indicar um cep válido" },
    maxLength: { value: 5, message: "Favor indicar um cep válido" },
  });
  schema.set("address.street", {
    required: "Favor indicar a rua do end.",
  });
  schema.set("address.number", {
    required: "Favor indicar o número do edf.",
  });
  schema.set("address.neighborhood", {
    required: "Favor indicar o bairro do end.",
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
