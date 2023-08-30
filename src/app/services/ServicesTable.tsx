"use client";

import { Table as MuiTable } from "@mui/joy";
import { LoadingTable } from "@/components/LoadingTable";
import { EmptyTableRow } from "@/components/EmptyTableRow";
import { ServicesTableRow } from "./ServicesTableRow";
import { useAppSelector } from "@/store/hooks";

export const ServicesTable: React.FC = () => {
  const servicesState = useAppSelector((state) => state.services);

  if (!servicesState.data.length) {
    return <LoadingTable />;
  }

  return (
    <MuiTable
      variant="outlined"
      borderAxis="xBetween"
      hoverRow={!!servicesState.data.length}
    >
      <thead>
        <tr>
          <th style={{ width: 50 }} aria-label="empty" />
          <th>Nome</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {!servicesState.data.length && <EmptyTableRow colSpan={6} />}
        {!!servicesState.data.length &&
          servicesState.data.map((service) => (
            <ServicesTableRow key={service.id} service={service} />
          ))}
      </tbody>
    </MuiTable>
  );
};
