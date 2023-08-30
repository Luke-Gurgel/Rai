"use client";

import { Sheet, Typography } from "@mui/joy";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { ptBR } from "date-fns/locale";

export const Schedule = () => {
  return (
    <Sheet className="w-full h-80 flex flex-start">
      <Sheet className="flex px-8 pt-6 pb-2 bg-slate-100">
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
          <DateCalendar onChange={(val, state) => console.log(val, state)} />
        </LocalizationProvider>
      </Sheet>
      <Sheet className="flex flex-1 h-80 py-8 px-4 bg-slate-300">
        <Typography level="title-lg">Ordens de serviço para</Typography>
      </Sheet>
    </Sheet>
  );
};
