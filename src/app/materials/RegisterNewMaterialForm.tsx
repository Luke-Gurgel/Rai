import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import { MaterialCategory } from "@/api/types/materials";
import { InputMessage } from "@/components/InputMessage";
import { Input } from "@/components/Input";

interface Props {}

export const RegisterNewMaterialForm = (props: Props) => {
  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      }}
    >
      <Stack spacing={2}>
        <FormControl required>
          <FormLabel>Nome</FormLabel>
          <Input autoFocus required placeholder="Nome do material" />
          <InputMessage message="Esse campo é obrigatório" />
        </FormControl>
        <FormControl required>
          <FormLabel>Categoria</FormLabel>
          <Select variant="outlined" placeholder="Categoria do material">
            {Object.entries(MaterialCategory).map(([key, val]) => {
              return (
                <Option key={key} value={key}>
                  {val}
                </Option>
              );
            })}
          </Select>
          <InputMessage message="Esse campo é obrigatório" />
        </FormControl>
        <FormControl required>
          <FormLabel>Grupo químico</FormLabel>
          <Input required placeholder="Grupo químico do material" />
          <InputMessage message="Esse campo é obrigatório" />
        </FormControl>
        <FormControl required>
          <FormLabel>Princípio ativo</FormLabel>
          <Input required placeholder="Princípio ativo do material" />
          <InputMessage message="Esse campo é obrigatório" />
        </FormControl>
        <FormControl required>
          <FormLabel>Quantidate mínima</FormLabel>
          <Input required type="number" placeholder="Quantidade mínima" />
          <InputMessage message="Esse campo é obrigatório" />
        </FormControl>
        <Button type="submit" className="bg-sky-500">
          Submit
        </Button>
      </Stack>
    </form>
  );
};
