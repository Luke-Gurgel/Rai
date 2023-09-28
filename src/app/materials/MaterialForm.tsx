"use client";

import { useState } from "react";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import { Material } from "@/api/types/materials";
import { materialAPI } from "@/api/requests/materials";
import { MaterialCategorySelect } from "@/components/MaterialCategorySelect";
import { useMaterialForm, MaterialFormData } from "./useMaterialForm";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { InputMessage } from "@/components/InputMessage";
import { getCategoryByName } from "@/store/materials";
import { materialStore } from "@/store/materials";
import { Input } from "@/components/Input";
import { toast } from "sonner";

interface Props {
  material?: Material;
  onSubmit?: () => void;
}

export const MaterialForm = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const { form, schema } = useMaterialForm(props.material);
  const { categories } = useAppSelector((state) => state.materials);
  const dispatch = useAppDispatch();

  const onSubmit = async (data: MaterialFormData) => {
    try {
      setLoading(true);
      const { categoryId } = getCategoryByName(categories, data.category);
      const reqBody = {
        categoryId,
        name: data.name,
        minQuantity: data.minQuantity,
        grupoQuimico: data.grupoQuimico,
        principioAtivo: data.principioAtivo,
      };
      if (props.material) {
        await materialAPI.updateMaterial(reqBody, props.material.materialId);
        dispatch(materialStore.updateMaterial({ ...props.material, ...data }));
        toast.success("Material atualizado com sucesso");
      } else {
        const materialId = await materialAPI.createMaterial(reqBody);
        const newMaterial = { ...data, materialId, inventory: [] };
        dispatch(materialStore.registerMaterial(newMaterial));
        toast.success("Novo material registrado com sucesso");
      }
      props.onSubmit?.();
    } catch (e) {
      toast.error("Failed to create new material. " + e);
    } finally {
      setLoading(false);
    }
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
          onChange={(category) => {
            if (category)
              form.setValue("category", category, {
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
        <Button loading={loading} type="submit" className="bg-sky-500">
          {!!props.material ? "Atualizar" : "Registrar"}
        </Button>
      </Stack>
    </form>
  );
};
