import Button from "@mui/joy/Button";
import { Input } from "@/components/Input";
import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import { ClientPJ } from "@/api/types/clients";
import { usePJClientForm } from "./usePJClientForm";
import { InputMessage } from "@/components/InputMessage";
import { Typography } from "@mui/joy";

interface Props {
  client?: ClientPJ;
}

export const PJClientForm = (props: Props) => {
  const { form, schema } = usePJClientForm(props.client);

  const onSubmit = (formData: ClientPJ) => {
    console.log("formData", formData);
  };

  const fetchAddressFromCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (!cep) return;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((end) => {
        form.setValue("address.cep", end.cep);
        form.setValue("address.street", end.logradouro);
        form.setValue("address.neighborhood", end.bairro);
        form.setValue("address.city", end.localidade);
        form.setValue("address.state", end.uf);
        form.setFocus("address.number");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center"
    >
      <div className="w-1/2 flex flex-col gap-y-4">
        <FormControl error={!!form.formState.errors.fantasyName}>
          <FormLabel>Nome Fantasia</FormLabel>
          <Input
            className="w-full"
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
            placeholder="CNPJ da empresa"
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
        <Typography level="body-lg">
          <strong>Endereço</strong>
        </Typography>
        <FormControl error={!!form.formState.errors.address?.cep}>
          <FormLabel>CEP</FormLabel>
          <Input
            placeholder="CEP (só números)"
            {...form.register("address.cep", schema.get("address.cep"))}
            onBlur={fetchAddressFromCEP}
          />
          {form.formState.errors.address?.cep && (
            <InputMessage
              message={form.formState.errors.address?.cep.message}
            />
          )}
        </FormControl>
        <div className="grid grid-cols-2 gap-2">
          <FormControl error={!!form.formState.errors.address?.street}>
            <Input
              placeholder="Rua"
              {...form.register("address.street", schema.get("address.street"))}
            />
            {form.formState.errors.address?.street && (
              <InputMessage
                message={form.formState.errors.address?.street.message}
              />
            )}
          </FormControl>
          <FormControl error={!!form.formState.errors.address?.number}>
            <Input
              placeholder="Num"
              {...form.register("address.number", schema.get("address.number"))}
            />
            {form.formState.errors.address?.number && (
              <InputMessage
                message={form.formState.errors.address?.number.message}
              />
            )}
          </FormControl>
          <FormControl error={!!form.formState.errors.address?.neighborhood}>
            <Input
              placeholder="Bairro"
              {...form.register(
                "address.neighborhood",
                schema.get("address.neighborhood")
              )}
            />
            {form.formState.errors.address?.neighborhood && (
              <InputMessage
                message={form.formState.errors.address?.neighborhood.message}
              />
            )}
          </FormControl>
          <FormControl>
            <Input
              placeholder="Complemento"
              {...form.register("address.complement")}
            />
          </FormControl>
          <FormControl error={!!form.formState.errors.address?.city}>
            <Input
              placeholder="Cidade"
              {...form.register("address.city", schema.get("address.city"))}
            />
            {form.formState.errors.address?.city && (
              <InputMessage
                message={form.formState.errors.address?.city.message}
              />
            )}
          </FormControl>
          <FormControl error={!!form.formState.errors.address?.state}>
            <Input
              placeholder="Estado"
              {...form.register("address.state", schema.get("address.state"))}
            />
            {form.formState.errors.address?.state && (
              <InputMessage
                message={form.formState.errors.address?.state.message}
              />
            )}
          </FormControl>
        </div>
        <Button
          type="submit"
          className="bg-sky-500 w-1/3 text-base py-3 m-auto"
        >
          Registrar
        </Button>
      </div>
    </form>
  );
};
