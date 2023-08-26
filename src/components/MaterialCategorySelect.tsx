import { Controller } from "react-hook-form";
import { InputMessage } from "@/components/InputMessage";
import { MaterialCategory } from "@/api/types/materials";
import { FormControl, FormLabel, Select, Option } from "@mui/joy";

interface Props {
  formControl: any;
  validationRules: any;
  onChange: (value: MaterialCategory) => void;
  defaultValue?: MaterialCategory;
  error?: string;
}

export const MaterialCategorySelect = (props: Props) => {
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
            defaultValue={props.defaultValue}
            variant="outlined"
            placeholder="Categoria do material"
            onChange={(e) => {
              const value = (e?.target as HTMLInputElement)
                .innerText as MaterialCategory;
              props.onChange(value);
            }}
          >
            {Object.entries(MaterialCategory).map(([key, val]) => {
              return (
                <Option key={key} value={val}>
                  {val}
                </Option>
              );
            })}
          </Select>
        )}
      />
      {props.error && <InputMessage message={props.error} />}
    </FormControl>
  );
};
