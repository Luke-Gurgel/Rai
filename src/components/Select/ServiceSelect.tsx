import { Controller } from "react-hook-form";
import { Service } from "@/api/types/services";
import { InputMessage } from "@/components/InputMessage";
import { FormControl, FormLabel, Select, Option } from "@mui/joy";

interface Props {
  options: Service[];
  formControl: any;
  validationRules: any;
  onChange: (valu: number | null) => void;
  defaultValue?: number;
  error?: string;
}

export const ServiceSelect = (props: Props) => {
  return (
    <FormControl error={!!props.error}>
      <FormLabel>Serviço</FormLabel>
      <Controller
        name="serviceId"
        control={props.formControl}
        rules={props.validationRules}
        defaultValue={props.defaultValue}
        render={() => (
          <Select
            variant="outlined"
            placeholder="Selecione um serviço"
            defaultValue={props.defaultValue}
            onChange={(_, value) => props.onChange(value)}
          >
            {props.options.map((service) => {
              return (
                <Option key={service.id} value={service.id}>
                  {service.name}
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
