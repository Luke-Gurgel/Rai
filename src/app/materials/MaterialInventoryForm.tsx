import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import { InputMessage } from "@/components/InputMessage";
import { Material, MaterialInventory } from "@/api/types/materials";
import { Input } from "@/components/Input";

interface Props {
  material: Material;
  materialInventory?: MaterialInventory;
}

export const MaterialInventoryForm = (props: Props) => {
  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      }}
    >
      <Stack spacing={2}>
        <FormControl>
          <FormLabel>Lote</FormLabel>
          <Input
            placeholder="Numero de lote"
            defaultValue={props.materialInventory?.lote}
          />
          {false && <InputMessage message="Esse campo é obrigatório" />}
        </FormControl>
        <FormControl>
          <FormLabel>Data de validade</FormLabel>
          <Input
            placeholder="Data de validade"
            defaultValue={props.materialInventory?.expDate}
          />
          {false && <InputMessage message="Esse campo é obrigatório" />}
        </FormControl>
        <FormControl>
          <FormLabel>Quantidate</FormLabel>
          <Input
            type="number"
            placeholder="Quantidade em estoque"
            defaultValue={props.materialInventory?.quantity}
          />
          {false && <InputMessage message="Esse campo é obrigatório" />}
        </FormControl>
        <Button type="submit" className="bg-sky-500">
          {!!props.materialInventory ? "Atualizar" : "Adicionar"}
        </Button>
      </Stack>
    </form>
  );
};
