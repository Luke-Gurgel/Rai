import { forwardRef } from "react";
import MuiInput, { InputProps } from "@mui/joy/Input";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref
) {
  return (
    <MuiInput
      {...props}
      slotProps={{ input: { ref } }}
      className="[&>input]:outline-none"
    />
  );
});
