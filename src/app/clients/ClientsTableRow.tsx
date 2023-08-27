"use client";

import { useState } from "react";
import { IconButton, Tooltip } from "@mui/joy";
import { CollapsibleRow } from "./CollapsibleRow";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { Client, ClientPF, ClientPJ } from "@/api/types/clients";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { formatPhoneNumber } from "@/utils/phone";
import { ClientModal } from "./ClientModal";

interface Props {
  client: Client;
}

export const ClientsTableRow = (props: Props) => {
  const [isCollapsibleRowOpen, setIsCollapsibleRowOpen] = useState(false);
  const [isClientModalOpen, setClientModalOpen] = useState(false);

  const pfClient: ClientPF = { ...(props.client as ClientPF) };
  const pjClient: ClientPJ = { ...(props.client as ClientPJ) };

  const toggleCollapsibleRow = () => {
    setIsCollapsibleRowOpen(!isCollapsibleRowOpen);
  };

  return (
    <>
      <tr key={props.client.id}>
        <td className="bg-slate-700">
          <IconButton
            size="sm"
            variant="plain"
            aria-label="expand row"
            onClick={toggleCollapsibleRow}
            className="hover:bg-transparent text-slate-600 hover:text-slate-900"
          >
            {isCollapsibleRowOpen ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </td>
        <td>{pfClient.name || pjClient.fantasyName}</td>
        <td>{props.client.email}</td>
        <td>{formatPhoneNumber(props.client.tel)}</td>
        <td>{pfClient.cpf ? "PF" : "PJ"}</td>
        <td>
          <div className="flex justify-end">
            <Tooltip title="Editar cliente" placement="top" variant="soft">
              <IconButton
                size="md"
                className="no-bg-button"
                onClick={() => setClientModalOpen(true)}
              >
                <EditRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </div>
        </td>
      </tr>
      {isCollapsibleRowOpen && <CollapsibleRow client={props.client} />}
      <ClientModal
        client={props.client}
        isOpen={isClientModalOpen}
        close={() => setClientModalOpen(false)}
      />
    </>
  );
};
