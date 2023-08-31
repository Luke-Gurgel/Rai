import { useForm, RegisterOptions, UseFormReturn } from "react-hook-form";
import { Client } from "@/api/types/clients";
import { NestedKeyOf } from "@/utils/types";
import { validateCpf } from "@/utils/cpf";

interface UsePFClientForm {
  form: UseFormReturn<Client<"PF">>;
  schema: Map<
    keyof Client<"PF"> | keyof NestedKeyOf<Client<"PF">>,
    RegisterOptions
  >;
}

export const usePFClientForm = (
  defaultValues?: Client<"PF">
): UsePFClientForm => {
  const form = useForm<Client<"PF">>({ defaultValues });

  const schema = new Map<
    keyof Client<"PF"> | keyof NestedKeyOf<Client<"PF">>,
    RegisterOptions
  >();

  schema.set("name", { required: "Favor indicar o nome do cliente" });
  schema.set("cpf", {
    required: "Favor indicar o cpf do cliente",
    validate: {
      invalid: (val) => {
        return validateCpf(val) || "este cpf é inválido";
      },
    },
  });
  schema.set("email", {
    required: "Favor indicar o email do cliente",
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  });
  schema.set("tel", {
    required: "Favor indicar o tel. do cliente",
    minLength: { value: 11, message: "Favor indicar um número válido" },
    maxLength: { value: 11, message: "Favor indicar um número válido" },
    validate: {
      missing9Prefix: (tel: string) => {
        return tel.charAt(2) === "9" || "Adicione o 9 na frente do número";
      },
      NaN: (val) => {
        return (
          typeof val === "number" || "tel deve ser uma sequência de 11 números"
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
