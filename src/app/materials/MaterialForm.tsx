import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import { Material } from "@/api/types/materials";
import { MaterialCategorySelect } from "@/components/MaterialCategorySelect";
import { InputMessage } from "@/components/InputMessage";
import { useMaterialForm } from "./useMaterialForm";
import { registerMaterial } from "@/store/materials";
import { useAppDispatch } from "@/store/hooks";
import { Input } from "@/components/Input";

interface Props {
  material?: Material;
}

export const MaterialForm = (props: Props) => {
  const { form, schema } = useMaterialForm(props.material);
  const dispatch = useAppDispatch();

  function getId(): number {
    return Math.floor(Math.random() * 200);
  }

  const onSubmit = (formData: Material) => {
    // data has already been validated
    // make API call to register the material
    // if the call succeeds, the request will receive a response containing the material obj with
    // id and inventory props (which are not present in formData)
    // add it to the list in the store
    dispatch(registerMaterial({ ...formData, id: getId(), inventory: [] }));
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormControl error={!!form.formState.errors.name}>
          <FormLabel>Nome</FormLabel>
          <Input
            autoFocus
            placeholder="Nome do material"
            {...form.register("name", schema.get("name"))}
          />
          {form.formState.errors.name && (
            <InputMessage message={form.formState.errors.name.message} />
          )}
        </FormControl>
        <MaterialCategorySelect
          formControl={form.control}
          defaultValue={props.material?.category}
          validationRules={schema.get("category")}
          error={form.formState.errors.category?.message}
          onChange={(value) => {
            form.setValue("category", value, {
              shouldDirty: true,
              shouldTouch: true,
              shouldValidate: true,
            });
          }}
        />
        <FormControl error={!!form.formState.errors.grupoQuimico}>
          <FormLabel>Grupo químico</FormLabel>
          <Input
            placeholder="Grupo químico do material"
            {...form.register("grupoQuimico", schema.get("grupoQuimico"))}
          />
          {form.formState.errors.grupoQuimico && (
            <InputMessage
              message={form.formState.errors.grupoQuimico.message}
            />
          )}
        </FormControl>
        <FormControl error={!!form.formState.errors.principioAtivo}>
          <FormLabel>Princípio ativo</FormLabel>
          <Input
            placeholder="Princípio ativo do material"
            {...form.register("principioAtivo", schema.get("principioAtivo"))}
          />
          {form.formState.errors.principioAtivo && (
            <InputMessage
              message={form.formState.errors.principioAtivo.message}
            />
          )}
        </FormControl>
        <FormControl error={!!form.formState.errors.minQuantity}>
          <FormLabel>Quantidate mínima</FormLabel>
          <Input
            type="number"
            placeholder="Quantidade mínima"
            {...form.register("minQuantity", schema.get("minQuantity"))}
          />
          {form.formState.errors.minQuantity && (
            <InputMessage message={form.formState.errors.minQuantity.message} />
          )}
        </FormControl>
        <Button type="submit" className="bg-sky-500">
          {!!props.material ? "Atualizar" : "Registrar"}
        </Button>
      </Stack>
    </form>
  );
};
