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
      dateTime: defaultValues?.dateTime,
      warranty: defaultValues?.warranty,
      additionalInfo: defaultValues?.additionalInfo,
    },
  });

  const schema = new Map<keyof ServiceOrderFormStructure, RegisterOptions>();

  schema.set("serviceId", {
    required: "Favor indicar o serviço a ser efetuado",
  });

  schema.set("clientId", { required: "Favor indicar o cliente" });

  schema.set("dateTime", {
    required: "Favor indicar quando o serviço será efetuado",
    validate: {
      futureOnly: (dateTime: Date) => {
        const date = new Date(dateTime);
        return isFuture(date) || "Indique uma data futura";
      },
      businessHours: (dateTime) => {
        const hours = new Date(dateTime).getHours();
        return (
          (hours >= 7 && hours < 18) ||
          "Favor indicar um horário dentro do horário comercial"
        );
      },
    },
  });

  schema.set("warranty", {
    valueAsNumber: true,
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
