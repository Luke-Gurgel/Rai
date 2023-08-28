"use client";

import { Table as MuiTable } from "@mui/joy";
import { LoadingTable } from "@/components/LoadingTable";
import { EmptyTableRow } from "@/components/EmptyTableRow";
import { ServicesTableRow } from "./ServicesTableRow";
import { useAppSelector } from "@/store/hooks";

export const ServicesTable: React.FC = () => {
  const clientsState = useAppSelector((state) => state.clients);

  if (!clientsState.data.length) {
    return <LoadingTable />;
  }

  return (
    <>
      <MuiTable
        variant="outlined"
        borderAxis="xBetween"
        hoverRow={!!clientsState.data.length}
      >
        <thead>
          <tr>
            <th style={{ width: 50 }} aria-label="empty" />
            <th>Nome</th>
            <th>Email</th>
            <th>Tel</th>
            <th>Tipo</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {!clientsState.data.length && <EmptyTableRow colSpan={6} />}
          {!!clientsState.data.length &&
            clientsState.data.map((client) => (
              <ServicesTableRow key={client.id} client={client} />
            ))}
        </tbody>
      </MuiTable>
    </>
  );
};
