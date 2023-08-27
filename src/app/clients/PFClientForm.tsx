import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import { Input } from "@/components/Input";
import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import { ClientPF } from "@/api/types/clients";
import { usePFClientForm } from "./usePFClientForm";
import { InputMessage } from "@/components/InputMessage";

interface Props {
  client?: ClientPF;
}

export const PFClientForm = (props: Props) => {
  const { form, schema } = usePFClientForm(props.client);

  const onSubmit = (formData: ClientPF) => {
    console.log("formData", formData);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormControl error={!!form.formState.errors.name}>
          <FormLabel>Nome</FormLabel>
          <Input
            placeholder="Nome do cliente"
            {...form.register("name", schema.get("name"))}
          />
          {form.formState.errors.name && (
            <InputMessage message={form.formState.errors.name.message} />
          )}
        </FormControl>
        <FormControl error={!!form.formState.errors.cpf}>
          <FormLabel>CPF</FormLabel>
          <Input
            placeholder="CPF do cliente"
            {...form.register("cpf", schema.get("cpf"))}
          />
          {form.formState.errors.cpf && (
            <InputMessage message={form.formState.errors.cpf.message} />
          )}
        </FormControl>
        <FormControl error={!!form.formState.errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="email do cliente"
            {...form.register("email", schema.get("email"))}
          />
          {form.formState.errors.email && (
            <InputMessage message={form.formState.errors.email.message} />
          )}
        </FormControl>
        <FormControl error={!!form.formState.errors.tel}>
          <FormLabel>Tel</FormLabel>
          <Input
            placeholder="tel do cliente"
            {...form.register("tel", schema.get("tel"))}
          />
          {form.formState.errors.tel && (
            <InputMessage message={form.formState.errors.tel.message} />
          )}
        </FormControl>
        <Button type="submit" className="bg-sky-500">
          Registrar
        </Button>
      </Stack>
    </form>
  );
};
