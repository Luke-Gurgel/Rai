"use client";

import { useState } from "react";
import { IconButton, Tooltip } from "@mui/joy";
import { ServiceOrder } from "@/api/types/services";
import { ServiceOrderModal } from "./ServiceOrderModal";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";
import { ServiceOrderView } from "./ServiceOrderView";
import { useServices } from "@/hooks/useServices";
import { useClients } from "@/hooks/useClients";

interface Props {
  serviceOrder: ServiceOrder;
}

export const ServiceOrdersTableRow = ({ serviceOrder }: Props) => {
  const { services } = useServices({ fetch: false });
  const { clients } = useClients({ fetch: false });
  const [isServiceOrderModalOpen, setServiceOrderModalOpen] = useState(false);
  const [isServiceOrderViewOpen, setServiceOrderViewOpen] = useState(false);

  const [client] = clients.filter(
    (client) => client.clientId === serviceOrder.clientId
  );
  const [service] = services.filter(
    (service) => service.serviceId === serviceOrder.serviceId
  );
  const [, time] = serviceOrder.dateTime.split("T");

  return (
    <>
      <tr>
        <td>
          {client.type === "PF" && client.name}
          {client.type === "PJ" && client.fantasyName}
        </td>
        <td>{service.name}</td>
        <td>{time}</td>
        <td>
          <div className="flex justify-end">
            <Tooltip
              title="Ver Ordem de Serviço"
              placement="top"
              variant="soft"
            >
              <IconButton
                size="md"
                className="no-bg-button"
                onClick={() => setServiceOrderViewOpen(true)}
              >
                <RemoveRedEyeSharpIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Editar Ordem de Serviço"
              placement="top"
              variant="soft"
            >
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
        serviceOrder={serviceOrder}
        close={() => setServiceOrderModalOpen(false)}
      />
      <ServiceOrderView
        isOpen={isServiceOrderViewOpen}
        serviceOrder={serviceOrder}
        service={service}
        client={client}
        close={() => setServiceOrderViewOpen(false)}
      />
    </>
  );
};
