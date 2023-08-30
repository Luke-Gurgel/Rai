"use client";

import { useState } from "react";
import { Sheet, Typography } from "@mui/joy";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { ServiceOrdersTable } from "./ServiceOrdersTable";
import { ptBR } from "date-fns/locale";

export const Schedule = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(today);

  return (
    <Sheet className="w-full max-h-96 flex">
      <Sheet className="flex px-8 pt-6 pb-2 bg-slate-100">
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
          <DateCalendar
            onChange={(date: Date | null) => {
              if (date) setSelectedDate(date);
            }}
          />
        </LocalizationProvider>
      </Sheet>
      <Sheet className="flex flex-1 flex-col gap-y-4 py-8 px-4 bg-slate-100">
        <Typography level="title-lg">
          Ordens de serviço para{" "}
          <strong className="text-blue-700">
            {selectedDate?.toLocaleDateString("pt-BR", { dateStyle: "full" })}
          </strong>
        </Typography>
        <ServiceOrdersTable selectedDate={selectedDate} />
      </Sheet>
    </Sheet>
  );
};
