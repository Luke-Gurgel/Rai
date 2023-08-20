import MuiInput, { InputProps } from "@mui/joy/Input";
import "./styles.css";

export const Input = (props: InputProps) => (
  <MuiInput {...props} className="no-outline" />
);
