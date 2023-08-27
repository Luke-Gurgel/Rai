import { useForm, RegisterOptions, UseFormReturn } from "react-hook-form";
import { ClientPF } from "@/api/types/clients";
import { NestedKeyOf } from "@/utils/types";
import { validateCpf } from "@/utils/cpf";

interface UsePFClientForm {
  form: UseFormReturn<ClientPF>;
  schema: Map<keyof ClientPF | keyof NestedKeyOf<ClientPF>, RegisterOptions>;
}

export const usePFClientForm = (defaultValues?: ClientPF): UsePFClientForm => {
  const form = useForm<ClientPF>({ defaultValues });

  const schema = new Map<
    keyof ClientPF | keyof NestedKeyOf<ClientPF>,
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
