import FormHelperText from "@mui/joy/FormHelperText";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";

interface Props {
  message: string;
}

export const InputMessage = (props: Props) => {
  return (
    <FormHelperText>
      <ReportGmailerrorredRoundedIcon />
      {props.message}
    </FormHelperText>
  );
};
