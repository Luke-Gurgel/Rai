"use client";

import { useState } from "react";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import { Input } from "@/components/Input";
import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import { useAppDispatch } from "@/store/hooks";
import { materialStore } from "@/store/materials";
import { InputMessage } from "@/components/InputMessage";
import { Material, MaterialInventory } from "@/api/types/materials";
import { useMaterialInventoryForm } from "./useMaterialInventoryForm";
import { materialInventoryAPI } from "@/api/requests/materialInventory";
import { toast } from "sonner";

interface Props {
  material: Material;
  materialInventory?: MaterialInventory;
  onSubmit?: () => void;
}

export const MaterialInventoryForm = (props: Props) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { form, schema } = useMaterialInventoryForm(props.materialInventory);

  const onSubmit = async (data: MaterialInventory) => {
    try {
      setLoading(true);
      if (props.materialInventory) {
        await materialInventoryAPI.updateMaterialInventory(
          data,
          props.materialInventory.inventoryId
        );
        dispatch(
          materialStore.updateInventory({
            materialId: props.material.materialId,
            inventory: data,
          })
        );
        toast.success("Estoque atualizado com sucesso");
      } else {
        const inventoryId = await materialInventoryAPI.createMaterialInventory({
          ...data,
          materialId: props.material.materialId,
        });
        dispatch(
          materialStore.addInventory({
            materialId: props.material.materialId,
            inventory: { ...data, inventoryId },
          })
        );
        toast.success("Estoque adicionado com sucesso");
      }
      props.onSubmit?.();
    } catch (e) {
      toast.error("Não foi possível realizer a operação. " + e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
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
        <Button loading={loading} type="submit" className="bg-sky-500">
          {!!props.materialInventory ? "Atualizar" : "Adicionar"}
        </Button>
      </Stack>
    </form>
  );
};
