"use client";

import { useState } from "react";
import { Box, Typography, Button } from "@mui/joy";
import { ClientModal } from "../clients/ClientModal";
import { AddCircleRounded } from "@mui/icons-material";

export const ScheduleHeader = () => {
  const [isServiceOrderModalOpen, setServiceOrderModalOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        level="h3"
        id="tableTitle"
        component="div"
        sx={{ flex: "1 1 100%" }}
      >
        Agenda
      </Typography>
      <div className="flex gap-x-2">
        <Button
          size="md"
          variant="soft"
          startDecorator={<AddCircleRounded />}
          onClick={() => setServiceOrderModalOpen(true)}
          className="whitespace-nowrap bg-sky-900 hover:bg-sky-800 text-white"
        >
          Nova Ordem de Serviço
        </Button>
        <ClientModal
          isOpen={isServiceOrderModalOpen}
          close={() => setServiceOrderModalOpen(false)}
        />
      </div>
    </Box>
  );
};
