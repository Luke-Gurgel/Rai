import { Modal, ModalDialog, Typography, Box, Button, Divider } from "@mui/joy";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { Material } from "@/api/types/materials";

interface Props {
  isOpen: boolean;
  material: Material;
  close: () => void;
}

export const ConfirmDeleteModal = (props: Props) => {
  return (
    <Modal open={props.isOpen} onClose={props.close}>
      <ModalDialog
        variant="outlined"
        role="alertdialog"
        aria-labelledby="alert-dialog-modal-title"
        aria-describedby="alert-dialog-modal-description"
      >
        <Typography
          id="alert-dialog-modal-title"
          level="h2"
          startDecorator={<WarningRoundedIcon />}
        >
          Confirmação
        </Typography>
        <Divider />
        <Typography
          id="alert-dialog-modal-description"
          textColor="text.tertiary"
        >
          Tem certeza que quer deletar <strong>{props.material?.name}</strong>{" "}
          do sistema?
        </Typography>
        <Box
          sx={{ display: "flex", gap: 1, justifyContent: "flex-end", pt: 2 }}
        >
          <Button
            className="bg-slate-400 hover:bg-red-300 text-white"
            onClick={props.close}
          >
            Cancelar
          </Button>
          <Button
            className="bg-red-400 hover:bg-red-300 text-white"
            onClick={props.close}
          >
            Deletar material
          </Button>
        </Box>
      </ModalDialog>
    </Modal>
  );
};
