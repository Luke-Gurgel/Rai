"use client";

import { useState } from "react";
import { Table as MuiTable } from "@mui/joy";
import { LoadingTable } from "@/components/LoadingTable";
import { EmptyTableRow } from "@/components/EmptyTableRow";
import { useAppSelector } from "@/store/hooks";

export const ClientsTable: React.FC = () => {
  const clientsState = useAppSelector((state) => state.clients);
  // const [materialToEdit, setMaterialToEdit] = useState<Material | null>(null);
  // const [materialToDelete, setMaterialToDelete] = useState<Material | null>(
  //   null
  // );

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
            <th>Tipo</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {!clientsState.data.length && <EmptyTableRow colSpan={3} />}
          {!!clientsState.data.length &&
            clientsState.data.map((client) => <></>)}
        </tbody>
      </MuiTable>
    </>
  );
};
