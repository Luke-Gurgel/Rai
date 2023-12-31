"use client";

import { useState } from "react";
import List from "@mui/joy/List";
import { Client } from "@/api/types/clients";
import { PFClientForm } from "./PFClientForm";
import { PJClientForm } from "./PJClientForm";
import { Stack, Modal, Checkbox, Typography, ModalDialog } from "@mui/joy";

interface Props {
  client?: Client<unknown>;
  isOpen: boolean;
  close: () => void;
}

export const ClientModal = (props: Props) => {
  const isClientPJ = props.client?.type === "PJ";
  const [clientType, setClientType] = useState<"PF" | "PJ">(
    isClientPJ ? "PJ" : "PF"
  );

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
                {props.client ? "Editar Cliente" : "Registrar Novo Cliente"}
              </Typography>
              <Typography level="body-sm" className="">
                <i>Pressione ESC para fechar essa tela</i>
              </Typography>
              {!props.client && (
                <div className="flex gap-x-8">
                  <Checkbox
                    size="md"
                    label="PF"
                    variant="outlined"
                    checked={clientType === "PF"}
                    onChange={() => setClientType("PF")}
                  />
                  <Checkbox
                    size="md"
                    label="PJ"
                    variant="outlined"
                    checked={clientType === "PJ"}
                    onChange={() => setClientType("PJ")}
                  />
                </div>
              )}
            </div>
            {clientType === "PF" && (
              <PFClientForm client={props.client as Client<"PF">} />
            )}
            {clientType === "PJ" && (
              <PJClientForm client={props.client as Client<"PJ">} />
            )}
          </Stack>
        </List>
      </ModalDialog>
    </Modal>
  );
};
