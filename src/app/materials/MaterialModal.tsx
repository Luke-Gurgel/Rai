import List from "@mui/joy/List";
import { Stack, Modal, ModalDialog, Typography } from "@mui/joy";
import { Material } from "@/api/types/materials";
import { MaterialForm } from "./MaterialForm";

interface Props {
  material?: Material;
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
              {props.material !== undefined
                ? "Editar Material"
                : "Registrar Novo Material"}
            </Typography>
            <MaterialForm material={props.material} />
          </Stack>
        </List>
      </ModalDialog>
    </Modal>
  );
};
