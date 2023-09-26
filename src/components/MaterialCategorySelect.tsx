"use client";

import { Controller } from "react-hook-form";
import { useAppSelector } from "@/store/hooks";
import { InputMessage } from "@/components/InputMessage";
import { FormControl, FormLabel, Select, Option } from "@mui/joy";

interface Props {
  formControl: any;
  validationRules: any;
  onChange: (value: string | null) => void;
  defaultValue?: string;
  error?: string;
}

export const MaterialCategorySelect = (props: Props) => {
  const { categories } = useAppSelector((state) => state.materials);

  return (
    <FormControl error={!!props.error}>
      <FormLabel>Categoria</FormLabel>
      <Controller
        name="category"
        control={props.formControl}
        rules={props.validationRules}
        defaultValue={props.defaultValue}
        render={() => (
          <Select
            variant="outlined"
            defaultValue={props.defaultValue}
            placeholder="Categoria do material"
            onChange={(_, category) => props.onChange(category)}
          >
            {categories.map((category) => (
              <Option key={category.categoryId} value={category.name}>
                {category.name}
              </Option>
            ))}
          </Select>
        )}
      />
      {props.error && <InputMessage message={props.error} />}
    </FormControl>
  );
};
