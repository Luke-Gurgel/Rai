"use client";

import { useState } from "react";
import { Client } from "@/api/types/clients";
import { IconButton, Tooltip } from "@mui/joy";
import { CollapsibleRow } from "./CollapsibleRow";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { formatPhoneNumber } from "@/utils/phone";
import { ClientModal } from "./ClientModal";

interface Props {
  client: Client<unknown>;
}

export const ClientsTableRow = ({ client }: Props) => {
  const [isCollapsibleRowOpen, setIsCollapsibleRowOpen] = useState(false);
  const [isClientModalOpen, setClientModalOpen] = useState(false);

  const toggleCollapsibleRow = () => {
    setIsCollapsibleRowOpen(!isCollapsibleRowOpen);
  };

  return (
    <>
      <tr>
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
        <td>
          {client.type === "PF" && client.name}
          {client.type === "PJ" && client.fantasyName}
        </td>
        <td>{client.email}</td>
        <td>{formatPhoneNumber(client.tel)}</td>
        <td>{client.type}</td>
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
      {isCollapsibleRowOpen && <CollapsibleRow client={client} />}
      <ClientModal
        client={client}
        isOpen={isClientModalOpen}
        close={() => setClientModalOpen(false)}
      />
    </>
  );
};
