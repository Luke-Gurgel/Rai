import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import { Input } from "@/components/Input";
import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import { InputMessage } from "@/components/InputMessage";
import { Material, MaterialInventory } from "@/api/types/materials";
import { useMaterialInventoryForm } from "./useMaterialInventoryForm";
import { format } from "date-fns";

interface Props {
  material: Material;
  materialInventory?: MaterialInventory;
}

export const MaterialInventoryForm = (props: Props) => {
  const { form, schema } = useMaterialInventoryForm(props.materialInventory);

  const onSubmit = (formData: MaterialInventory) => {
    console.log("formData", formData);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit, (errors) => console.log(errors))}
    >
      <Stack spacing={2}>
        <FormControl error={!!form.formState.errors.lote}>
          <FormLabel>Lote</FormLabel>
          <Input
            placeholder="Numero de lote"
            {...form.register("lote", schema.get("lote"))}
          />
          {form.formState.errors.lote && (
            <InputMessage message={form.formState.errors.lote.message} />
          )}
        </FormControl>
        <FormControl error={!!form.formState.errors.expDate}>
          <FormLabel>Data de validade</FormLabel>
          <Input
            type="date"
            placeholder="Data de validade"
            {...form.register("expDate", schema.get("expDate"))}
          />
          {form.formState.errors.expDate && (
            <InputMessage message={form.formState.errors.expDate.message} />
          )}
        </FormControl>
        <FormControl error={!!form.formState.errors.quantity}>
          <FormLabel>Quantidate</FormLabel>
          <Input
            type="number"
            placeholder="Quantidade em estoque"
            {...form.register("quantity", schema.get("quantity"))}
          />
          {form.formState.errors.quantity && (
            <InputMessage message={form.formState.errors.quantity.message} />
          )}
        </FormControl>
        <FormControl error={!!form.formState.errors.price}>
          <FormLabel>Preço</FormLabel>
          <Input
            type="number"
            placeholder="Preço da compra"
            {...form.register("price", schema.get("price"))}
          />
          {form.formState.errors.price && (
            <InputMessage message={form.formState.errors.price.message} />
          )}
        </FormControl>
        <FormControl error={!!form.formState.errors.purchaseDate}>
          <FormLabel>Data da compra</FormLabel>
          <Input
            type="date"
            placeholder="Data da compra"
            {...form.register("purchaseDate", schema.get("purchaseDate"))}
          />
          {form.formState.errors.purchaseDate && (
            <InputMessage
              message={form.formState.errors.purchaseDate.message}
            />
          )}
        </FormControl>
        <Button type="submit" className="bg-sky-500">
          {!!props.materialInventory ? "Atualizar" : "Adicionar"}
        </Button>
      </Stack>
    </form>
  );
};
