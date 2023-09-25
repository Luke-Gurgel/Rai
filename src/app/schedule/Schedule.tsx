"use client";

import { useState } from "react";
import { ptBR } from "date-fns/locale";
import { Sheet, Typography } from "@mui/joy";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useServiceOrders } from "@/hooks/useServiceOrders";
import { ServiceOrdersTable } from "./ServiceOrdersTable";
import { useMaterials } from "@/hooks/useMaterials";
import { useServices } from "@/hooks/useServices";
import { useClients } from "@/hooks/useClients";

export const Schedule = () => {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState<number>(today.getDate());
  const [selectedMonth, setSelectedMonth] = useState<number>(today.getMonth());
  const [selectedYear, setSelectedYear] = useState<number>(today.getFullYear());
  useServiceOrders({ month: selectedMonth, year: selectedYear });
  useMaterials({ fetch: true });
  useServices({ fetch: true });
  useClients({ fetch: true });

  const selectedDate = new Date(selectedYear, selectedMonth, selectedDay);

  return (
    <Sheet className="w-full max-h-96 flex">
      <Sheet className="flex px-8 pt-6 pb-2 bg-slate-100">
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
          <DateCalendar
            onChange={(date: Date | null) => {
              if (date) {
                setSelectedDay(date.getDate());
                setSelectedMonth(date.getMonth());
                setSelectedYear(date.getFullYear());
              }
            }}
          />
        </LocalizationProvider>
      </Sheet>
      <Sheet className="flex flex-1 flex-col gap-y-4 py-8 px-4 bg-slate-100">
        <Typography level="title-lg">
          Ordens de serviço para{" "}
          <strong className="text-slate-500">
            {selectedDate?.toLocaleDateString("pt-BR", { dateStyle: "full" })}
          </strong>
        </Typography>
        <ServiceOrdersTable selectedDate={selectedDate} />
      </Sheet>
    </Sheet>
  );
};
