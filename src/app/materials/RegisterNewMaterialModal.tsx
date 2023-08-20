import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import { Stack, Modal, ModalDialog, Typography } from "@mui/joy";
import { RegisterNewMaterialForm } from "./RegisterNewMaterialForm";

interface Props {
  isOpen: boolean;
  close: () => void;
}

export const RegisterNewMaterialModal = (props: Props) => {
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
              Registrar Novo Material
            </Typography>
            <RegisterNewMaterialForm />
          </Stack>
        </List>
      </ModalDialog>
    </Modal>
  );
};
