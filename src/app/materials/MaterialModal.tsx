import List from "@mui/joy/List";
import { Stack, Modal, ModalDialog, Typography } from "@mui/joy";
import { MaterialForm } from "./MaterialForm";
import { MaterialFormType } from "./types";

interface Props {
  formType: MaterialFormType;
  isOpen: boolean;
  close: () => void;
}

export const MaterialModal = (props: Props) => {
  return (
    <Modal open={props.isOpen} onClose={props.close}>
      <ModalDialog layout="center" variant="outlined" size="lg">
        <List
          sx={{
            overflow: "scroll",
            mx: "calc(-1 * var(--ModalDialog-padding))",
            px: "var(--ModalDialog-padding)",
          }}
        >
          <Stack spacing={2} className="px-3">
            <Typography level="h3" className="">
              {props.formType === MaterialFormType.RESGISTER
                ? " Registrar Novo Material"
                : "Editar Material"}
            </Typography>
            <MaterialForm formType={props.formType} />
          </Stack>
        </List>
      </ModalDialog>
    </Modal>
  );
};
