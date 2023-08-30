import { Controller } from "react-hook-form";
import { InputMessage } from "@/components/InputMessage";
import { Client, ClientPF, ClientPJ } from "@/api/types/clients";
import { FormControl, FormLabel, Select, Option } from "@mui/joy";

interface Props {
  options: Client[];
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
              const cnpj = (client as ClientPJ)?.cnpj;
              return (
                <Option key={client.id} value={client.id}>
                  {cnpj
                    ? (client as ClientPJ).fantasyName
                    : (client as ClientPF).name}
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
