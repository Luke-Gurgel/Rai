"use client";

import Button from "@mui/joy/Button";
import { Input } from "@/components/Input";
import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import { Service } from "@/api/types/services";
import { useServiceForm } from "./useServiceForm";
import { InputMessage } from "@/components/InputMessage";
import CheckIcon from "@mui/icons-material/Check";
import { useAppSelector } from "@/store/hooks";
import Typography from "@mui/joy/Typography";
import Checkbox from "@mui/joy/Checkbox";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";

interface Props {
  service?: Service;
}

export const ServiceForm = (props: Props) => {
  const materialsState = useAppSelector((state) => state.materials);
  const { form, schema } = useServiceForm(props.service);

  const materials = form.watch("materials");

  const onSubmit = (formData: Service) => {
    console.log("formData", formData);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-y-4">
        <FormControl error={!!form.formState.errors.name}>
          <FormLabel>Serviço</FormLabel>
          <Input
            placeholder="Nome do serviço"
            {...form.register("name", schema.get("name"))}
          />
          {form.formState.errors.name && (
            <InputMessage message={form.formState.errors.name.message} />
          )}
        </FormControl>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <div>
            <Typography level="title-sm" id="fav-movie" mb={2}>
              Materiais necessários
            </Typography>
            <Box
              role="group"
              aria-labelledby="fav-movie"
              sx={{
                gap: 1,
                display: "grid",
                "grid-template-columns": "1fr 2fr",
              }}
            >
              {materialsState.data.map((material) => {
                const checked =
                  materials.find((m) => m.id === material.id) !== undefined;
                return (
                  <Chip
                    variant="soft"
                    key={material.id}
                    color={checked ? "primary" : "neutral"}
                    startDecorator={
                      checked && (
                        <CheckIcon sx={{ zIndex: 1, pointerEvents: "none" }} />
                      )
                    }
                  >
                    <Checkbox
                      overlay
                      disableIcon
                      checked={checked}
                      variant="outlined"
                      label={material.name}
                      color={checked ? "primary" : "neutral"}
                      onChange={(event) => {
                        const updatedList = !event.target.checked
                          ? materials.filter((m) => m.id !== material.id)
                          : [...materials, material];
                        form.setValue("materials", updatedList);
                      }}
                    />
                  </Chip>
                );
              })}
            </Box>
          </div>
        </Box>
        <Button
          type="submit"
          className="bg-sky-500 w-1/3 text-base py-3 m-auto mt-4"
        >
          {props.service ? "Atualizar" : "Registrar"}
        </Button>
      </div>
    </form>
  );
};
