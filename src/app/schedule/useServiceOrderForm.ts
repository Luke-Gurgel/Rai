import { useForm, RegisterOptions, UseFormReturn } from "react-hook-form";
import { ServiceOrder } from "@/api/types/services";
import { ServiceOrderFormStructure } from "./types";
import { isFuture } from "date-fns";

interface UseServiceOrderForm {
  form: UseFormReturn<ServiceOrderFormStructure>;
  schema: Map<keyof ServiceOrderFormStructure, RegisterOptions>;
}

export const useServiceOrderForm = (
  defaultValues?: ServiceOrder
): UseServiceOrderForm => {
  const form = useForm<ServiceOrderFormStructure>({
    defaultValues: {
      serviceId: defaultValues?.service?.id,
      clientId: defaultValues?.client?.id,
      date: defaultValues?.date,
      time: defaultValues?.time,
      warranty: defaultValues?.warranty,
      additionalInfo: defaultValues?.additionalInfo,
    },
  });

  const schema = new Map<keyof ServiceOrderFormStructure, RegisterOptions>();

  schema.set("serviceId", {
    required: "Favor indicar o serviço a ser efetuado",
  });

  schema.set("clientId", { required: "Favor indicar o cliente" });

  schema.set("date", {
    required: "Favor indicar quando o serviço será efetuado",
    validate: {
      futureOnly: (date) => isFuture(date) || "Indique uma data futura",
    },
  });

  schema.set("time", {
    required: "Favor indicar quando o horário do serviço",
    min: {
      value: 7,
      message: "Niguém merece trabalhar antes das 7h",
    },
    max: {
      value: 18,
      message: "Niguém merece trabalhar depois das 18h",
    },
  });

  schema.set("warranty", {
    required: "Favor indicar o período de garantia desse serviço",
    max: {
      value: 90,
      message: "O período máximo de garantia é de 90 dias",
    },
    min: {
      value: 30,
      message: "O período mínimo de garantia é de 30 dias",
    },
  });

  return { form, schema };
};
