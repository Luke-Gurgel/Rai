"use client";

import { Table as MuiTable } from "@mui/joy";
import { ServiceOrdersTableRow } from "./ServiceOrdersTableRow";
import { EmptyTableRow } from "@/components/EmptyTableRow";
import { useAppSelector } from "@/store/hooks";
import { isSameDay } from "date-fns";

interface Props {
  selectedDate: Date;
}

export const ServiceOrdersTable: React.FC<Props> = (props) => {
  const serviceOrders = useAppSelector((state) => state.serviceOrders.data);

  const serviceOrdersForSelectedDay = serviceOrders.filter((so) =>
    isSameDay(new Date(so.dateTime), props.selectedDate)
  );

  return (
    <MuiTable
      variant="soft"
      borderAxis="xBetween"
      hoverRow={!!serviceOrdersForSelectedDay.length}
      className="border-solid border-slate-300 border-2"
    >
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Serviço</th>
          <th>Horário</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {!serviceOrdersForSelectedDay.length && <EmptyTableRow colSpan={4} />}
        {!!serviceOrdersForSelectedDay.length &&
          serviceOrdersForSelectedDay.map((so) => (
            <ServiceOrdersTableRow key={so.id} serviceOrder={so} />
          ))}
      </tbody>
    </MuiTable>
  );
};
