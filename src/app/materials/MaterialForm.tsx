import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import { Material } from "@/api/types/materials";
import { MaterialCategorySelect } from "@/components/MaterialCategorySelect";
import { InputMessage } from "@/components/InputMessage";
import { Input } from "@/components/Input";

interface Props {
  material?: Material;
}

export const MaterialForm = (props: Props) => {
  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      }}
    >
      <Stack spacing={2}>
        <FormControl required>
          <FormLabel>Nome</FormLabel>
          <Input
            autoFocus
            required
            placeholder="Nome do material"
            defaultValue={props.material?.name}
          />
          {false && <InputMessage message="Esse campo é obrigatório" />}
        </FormControl>
        <FormControl required>
          <FormLabel>Categoria</FormLabel>
          <MaterialCategorySelect
            placeholder="Categoria do material"
            defaultValue={props.material?.category}
          />
          {false && <InputMessage message="Esse campo é obrigatório" />}
        </FormControl>
        <FormControl required>
          <FormLabel>Grupo químico</FormLabel>
          <Input
            required
            placeholder="Grupo químico do material"
            defaultValue={props.material?.grupoQuimico}
          />
          {false && <InputMessage message="Esse campo é obrigatório" />}
        </FormControl>
        <FormControl required>
          <FormLabel>Princípio ativo</FormLabel>
          <Input
            required
            placeholder="Princípio ativo do material"
            defaultValue={props.material?.principioAtivo}
          />
          {false && <InputMessage message="Esse campo é obrigatório" />}
        </FormControl>
        <FormControl required>
          <FormLabel>Quantidate mínima</FormLabel>
          <Input
            required
            type="number"
            placeholder="Quantidade mínima"
            defaultValue={props.material?.minQuantity}
          />
          {false && <InputMessage message="Esse campo é obrigatório" />}
        </FormControl>
        <Button type="submit" className="bg-sky-500">
          {!!props.material ? "Atualizar" : "Registrar"}
        </Button>
      </Stack>
    </form>
  );
};
