import List from "@mui/joy/List";
import { ServiceForm } from "./ServiceForm";
import { Service } from "@/api/types/services";
import { Stack, Modal, Typography, ModalDialog } from "@mui/joy";

interface Props {
  service?: Service;
  isOpen: boolean;
  close: () => void;
}

export const ServiceModal = (props: Props) => {
  return (
    <Modal open={props.isOpen} onClose={props.close}>
      <ModalDialog layout="center" variant="outlined">
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
                {props.service ? "Editar Serviço" : "Registrar Novo Serviço"}
              </Typography>
              <Typography level="body-sm" className="">
                <i>Pressione ESC para fechar essa tela</i>
              </Typography>
            </div>
            <ServiceForm service={props.service} />
          </Stack>
        </List>
      </ModalDialog>
    </Modal>
  );
};
