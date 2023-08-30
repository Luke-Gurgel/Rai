"use client";

import { useState } from "react";
import { IconButton, Tooltip } from "@mui/joy";
import { ServiceOrder } from "@/api/types/services";
import { ServiceOrderModal } from "./ServiceOrderModal";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

interface Props {
  serviceOrder: ServiceOrder;
}

export const ServiceOrdersTableRow = (props: Props) => {
  const [isServiceOrderModalOpen, setServiceOrderModalOpen] = useState(false);

  return (
    <>
      <tr>
        <td>{props.serviceOrder.client.email}</td>
        <td>{props.serviceOrder.service.name}</td>
        <td>{props.serviceOrder.dateTime}</td>
        <td>
          <div className="flex justify-end">
            <Tooltip title="Editar S.O" placement="top" variant="soft">
              <IconButton
                size="md"
                className="no-bg-button"
                onClick={() => setServiceOrderModalOpen(true)}
              >
                <EditRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </div>
        </td>
      </tr>
      <ServiceOrderModal
        isOpen={isServiceOrderModalOpen}
        serviceOrder={props.serviceOrder}
        close={() => setServiceOrderModalOpen(false)}
      />
    </>
  );
};
