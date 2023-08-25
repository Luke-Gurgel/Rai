import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { MaterialCategory } from "@/api/types/materials";
import { ComponentProps } from "react";

interface Props extends ComponentProps<typeof Select> {
  defaultValue?: MaterialCategory;
}

export const MaterialCategorySelect: React.FC<Props> = (props) => {
  return (
    <Select variant="outlined" {...props}>
      {Object.entries(MaterialCategory).map(([key, val]) => {
        return (
          <Option key={key} value={key}>
            {val}
          </Option>
        );
      })}
    </Select>
  );
};
