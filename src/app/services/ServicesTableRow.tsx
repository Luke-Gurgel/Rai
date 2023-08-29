"use client";

import { useState } from "react";
import { ServiceModal } from "./ServiceModal";
import { IconButton, Tooltip } from "@mui/joy";
import { Service } from "@/api/types/services";
import { CollapsibleRow } from "./CollapsibleRow";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  service: Service;
}

export const ServicesTableRow = (props: Props) => {
  const [isCollapsibleRowOpen, setCollapsibleRowOpen] = useState(false);
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);

  const toggleCollapsibleRow = () => {
    setCollapsibleRowOpen(!isCollapsibleRowOpen);
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
        <td>{props.service.name}</td>
        <td>
          <div className="flex justify-end">
            <Tooltip title="Editar serviço" placement="top" variant="soft">
              <IconButton
                size="md"
                className="no-bg-button"
                onClick={() => setServiceModalOpen(true)}
              >
                <EditRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </div>
        </td>
      </tr>
      {isCollapsibleRowOpen && <CollapsibleRow service={props.service} />}
      <ServiceModal
        service={props.service}
        isOpen={isServiceModalOpen}
        close={() => setServiceModalOpen(false)}
      />
    </>
  );
};
