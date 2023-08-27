"use client";

import { useState } from "react";
import List from "@mui/joy/List";
import { PFClientForm } from "./PFClientForm";
import { PJClientForm } from "./PJClientForm";
import {
  Stack,
  Sheet,
  Modal,
  Checkbox,
  Typography,
  ModalDialog,
} from "@mui/joy";

interface Props {
  isOpen: boolean;
  close: () => void;
}

export const ClientModal = (props: Props) => {
  const [clientType, setClientType] = useState<"PF" | "PJ">("PF");

  return (
    <Modal open={props.isOpen} onClose={props.close}>
      <ModalDialog layout="center" variant="outlined" size="lg">
        <List
          sx={{
            overflow: "scroll",
            px: "var(--ModalDialog-padding)",
            mx: "calc(-1 * var(--ModalDialog-padding))",
          }}
        >
          <Stack spacing={2} className="px-3">
            <Typography level="h3" className="">
              Registrar Novo Cliente
            </Typography>
            <Sheet className="flex gap-x-8">
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
            </Sheet>
            {clientType === "PF" && <PFClientForm />}
            {clientType === "PJ" && <PJClientForm />}
          </Stack>
        </List>
      </ModalDialog>
    </Modal>
  );
};
