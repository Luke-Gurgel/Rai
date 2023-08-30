"use client";

import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import { Input } from "@/components/Input";
import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import { ServiceOrderFormStructure } from "./types";
import { ServiceOrder } from "@/api/types/services";
import { InputMessage } from "@/components/InputMessage";
import { useServiceOrderForm } from "./useServiceOrderForm";
import { ServiceSelect, ClientSelect } from "@/components/Select";
import { useAppSelector } from "@/store/hooks";

interface Props {
  serviceOrder?: ServiceOrder;
}

export const ServiceOrderForm = (props: Props) => {
  const clients = useAppSelector((state) => state.clients.data);
  const services = useAppSelector((state) => state.services.data);
  const { form, schema } = useServiceOrderForm(props.serviceOrder);

  const onSubmit = (formData: ServiceOrderFormStructure) => {
    console.log("formData", formData);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center"
    >
      <div className="w-1/2 flex flex-col gap-y-4">
        <ServiceSelect
          options={services}
          formControl={form.control}
          validationRules={schema.get("serviceId")}
          defaultValue={props.serviceOrder?.service?.id}
          error={form.formState.errors.serviceId?.message}
          onChange={(serviceId) => {
            if (serviceId)
              form.setValue("serviceId", serviceId, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true,
              });
          }}
        />
        <ClientSelect
          options={clients}
          formControl={form.control}
          validationRules={schema.get("clientId")}
          defaultValue={props.serviceOrder?.client?.id}
          error={form.formState.errors.clientId?.message}
          onChange={(clientId) => {
            if (clientId)
              form.setValue("clientId", clientId, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true,
              });
          }}
        />
        <FormControl error={!!form.formState.errors.dateTime}>
          <FormLabel>Data e Horário</FormLabel>
          <Input
            type="datetime-local"
            {...form.register("dateTime", schema.get("dateTime"))}
          />
          {form.formState.errors.dateTime && (
            <InputMessage message={form.formState.errors.dateTime.message} />
          )}
        </FormControl>
        <FormControl error={!!form.formState.errors.warranty}>
          <FormLabel>
            Garantia <i>(em dias)</i>
          </FormLabel>
          <Input
            type="number"
            placeholder="Quantos dias de garantia"
            {...form.register("warranty", schema.get("warranty"))}
          />
          {form.formState.errors.warranty && (
            <InputMessage message={form.formState.errors.warranty.message} />
          )}
        </FormControl>
        <FormControl error={!!form.formState.errors.additionalInfo}>
          <FormLabel>Informações adicionais</FormLabel>
          <Textarea
            minRows={3}
            placeholder="Algo a acrescentar"
            className="[&>textarea]:outline-none"
            {...form.register("additionalInfo", schema.get("additionalInfo"))}
          />
          {form.formState.errors.additionalInfo && (
            <InputMessage
              message={form.formState.errors.additionalInfo.message}
            />
          )}
        </FormControl>
        <Button
          type="submit"
          className="bg-sky-500 text-base w-1/3 py-3 m-auto mt-4"
        >
          {props.serviceOrder ? "Atualizar" : "Registrar"}
        </Button>
      </div>
    </form>
  );
};
