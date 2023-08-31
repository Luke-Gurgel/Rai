import { Controller } from "react-hook-form";
import { InputMessage } from "@/components/InputMessage";
import { FormControl, FormLabel, Select, Option } from "@mui/joy";
import { Client } from "@/api/types/clients";

interface Props {
  options: Client<unknown>[];
  formControl: any;
  validationRules: any;
  onChange: (valu: number | null) => void;
  defaultValue?: number;
  error?: string;
}

export const ClientSelect = (props: Props) => {
  return (
    <FormControl error={!!props.error}>
      <FormLabel>Cliente</FormLabel>
      <Controller
        name="clientId"
        control={props.formControl}
        rules={props.validationRules}
        defaultValue={props.defaultValue}
        render={() => (
          <Select
            variant="outlined"
            placeholder="Selecione um cliente"
            defaultValue={props.defaultValue}
            onChange={(_, value) => props.onChange(value)}
          >
            {props.options.map((client) => {
              return (
                <Option key={client.id} value={client.id}>
                  {client.type === "PF" && client.name}
                  {client.type === "PJ" && client.fantasyName}
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
