import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import { Input } from "@/components/Input";
import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import { ClientPJ } from "@/api/types/clients";
import { usePJClientForm } from "./usePJClientForm";
import { InputMessage } from "@/components/InputMessage";

interface Props {
  client?: ClientPJ;
}

export const PJClientForm = (props: Props) => {
  const { form, schema } = usePJClientForm(props.client);

  const onSubmit = (formData: ClientPJ) => {
    console.log("formData", formData);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormControl error={!!form.formState.errors.fantasyName}>
          <FormLabel>Nome Fantasia</FormLabel>
          <Input
            placeholder="Nome fantasia da empresa"
            {...form.register("fantasyName", schema.get("fantasyName"))}
          />
          {form.formState.errors.fantasyName && (
            <InputMessage message={form.formState.errors.fantasyName.message} />
          )}
        </FormControl>
        <FormControl error={!!form.formState.errors.razaoSocial}>
          <FormLabel>Razão Social</FormLabel>
          <Input
            placeholder="Razão social da empresa"
            {...form.register("razaoSocial", schema.get("razaoSocial"))}
          />
          {form.formState.errors.razaoSocial && (
            <InputMessage message={form.formState.errors.razaoSocial.message} />
          )}
        </FormControl>
        <FormControl error={!!form.formState.errors.cnpj}>
          <FormLabel>CNPJ</FormLabel>
          <Input
            placeholder="cnpj da empresa"
            {...form.register("cnpj", schema.get("cnpj"))}
          />
          {form.formState.errors.cnpj && (
            <InputMessage message={form.formState.errors.cnpj.message} />
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
