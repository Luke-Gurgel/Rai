"use client";

import { useRef } from "react";
import List from "@mui/joy/List";
import { ServiceOrder } from "@/api/types/services";
import { ClientPF, ClientPJ } from "@/api/types/clients";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import { formatPhoneNumber } from "@/utils/phone";
import { useReactToPrint } from "react-to-print";
import { formatAddress } from "@/utils/address";
import { formatCnpj } from "@/utils/cnpj";
import { formatCpf } from "@/utils/cpf";
import {
  Stack,
  Modal,
  Tooltip,
  IconButton,
  Typography,
  ModalDialog,
} from "@mui/joy";

interface Props {
  isOpen: boolean;
  serviceOrder: ServiceOrder;
  close: () => void;
}

export const ServiceOrderView: React.FC<Props> = (props) => {
  const pfClient: ClientPF = { ...(props.serviceOrder.client as ClientPF) };
  const pjClient: ClientPJ = { ...(props.serviceOrder.client as ClientPJ) };
  const [date, time] = props.serviceOrder.dateTime.split("T");

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    copyStyles: true,
    documentTitle: `O.S-${props.serviceOrder.dateTime}-${
      pfClient.cpf || pjClient.cnpj
    }`,
    content: () => componentRef?.current,
  });

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
          <Stack spacing={4} className="flex items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <Typography level="h2" className="">
                Ordem de Serviço
              </Typography>
              <Typography level="body-sm" className="">
                <i>Pressione ESC para fechar essa tela</i>
              </Typography>
            </div>
            <div ref={componentRef} className={`flex flex-col px-8 py-6`}>
              <div className="flex justify-end">
                <Tooltip title="Gerar pdf" placement="top" variant="soft">
                  <IconButton
                    size="md"
                    className="no-bg-button"
                    onClick={handlePrint}
                  >
                    <PictureAsPdfRoundedIcon fontSize="medium" />
                  </IconButton>
                </Tooltip>
              </div>
              <Typography level="h3" className="text-slate-600">
                <i>Serviço</i>
              </Typography>
              <Typography level="body-lg" className="mt-2">
                {props.serviceOrder.service.name}{" "}
                <i>{` (garantia de ${props.serviceOrder.warranty} dias)`}</i>
              </Typography>
              <Typography level="h3" className="text-slate-600 mt-4">
                <i>Cliente</i>
              </Typography>
              <Typography level="body-lg" className="mt-2">
                {pfClient.name || pjClient.fantasyName} {" - "}
                {pfClient.cpf && <>cpf {formatCpf(pfClient.cpf)}</>}
                {pjClient.cnpj && <>cnpj {formatCnpj(pjClient.cnpj)}</>}
              </Typography>
              <Typography level="title-lg" className="text-slate-600 mt-2">
                <i>Endereço</i>
              </Typography>
              <Typography level="body-lg">
                {formatAddress(props.serviceOrder.client.address)}
              </Typography>
              <Typography level="title-lg" className="text-slate-600 mt-2">
                <i>Contato</i>
              </Typography>
              <Typography level="body-lg">
                {props.serviceOrder.client.email} |{" "}
                {formatPhoneNumber(props.serviceOrder.client.tel)}
              </Typography>
              <Typography level="h3" className="text-slate-600 mt-4">
                <i>Data e Horário</i>
              </Typography>
              <Typography level="body-lg" className="mt-2">
                {new Date(date).toLocaleDateString("pt-BR", {
                  dateStyle: "short",
                })}
                {", "}
                {"às"} {time}
              </Typography>
              <Typography level="h3" className="text-slate-600 mt-4">
                <i>Materiais Necessários</i>
              </Typography>
              <Typography level="body-lg" className="mt-2">
                {props.serviceOrder.service.materials
                  .map((m) => m.name)
                  .join(", ")}
              </Typography>
              <Typography level="h3" className="text-slate-600 mt-4">
                <i>Informações Adicionais</i>
              </Typography>
              <Typography level="body-lg" className="mt-2">
                {props.serviceOrder.additionalInfo}
              </Typography>
            </div>
          </Stack>
        </List>
      </ModalDialog>
    </Modal>
  );
};
