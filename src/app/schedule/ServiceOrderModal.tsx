import List from "@mui/joy/List";
import { ServiceOrder } from "@/api/types/services";
import { ServiceOrderForm } from "./ServiceOrderForm";
import { Stack, Modal, Typography, ModalDialog } from "@mui/joy";

interface Props {
  serviceOrder?: ServiceOrder;
  isOpen: boolean;
  close: () => void;
}

export const ServiceOrderModal = (props: Props) => {
  return (
    <Modal open={props.isOpen} onClose={props.close}>
      <ModalDialog layout="fullscreen" variant="outlined">
        <List
          sx={{
            overflow: "scroll",
            px: "var(--ModalDialog-padding)",
            mx: "calc(-1 * var(--ModalDialog-padding))",
          }}
        >
          <Stack spacing={2}>
            <div className="flex flex-col items-center gap-y-2">
              <Typography level="h3" className="">
                {props.serviceOrder
                  ? "Editar Ordem de Serviço"
                  : "Registrar Nova Ordem de Serviço"}
              </Typography>
              <Typography level="body-sm" className="">
                <i>Pressione ESC para fechar essa tela</i>
              </Typography>
            </div>
            <ServiceOrderForm serviceOrder={props.serviceOrder} />
          </Stack>
        </List>
      </ModalDialog>
    </Modal>
  );
};
