"use client";

import { useState } from "react";
import { ClientModal } from "./ClientModal";
import { AddCircleRounded } from "@mui/icons-material";
import { Box, IconButton, Typography, Tooltip } from "@mui/joy";

export const ClientsTableHeader = () => {
  const [isClientModalOpen, setClientModalOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        level="h3"
        id="tableTitle"
        component="div"
        sx={{ flex: "1 1 100%" }}
      >
        Clientes
      </Typography>
      <div className="flex gap-x-2">
        <Tooltip title="Registrar novo cliente" variant="soft" placement="top">
          <IconButton
            size="sm"
            color="neutral"
            variant="outlined"
            onClick={() => setClientModalOpen(true)}
          >
            <AddCircleRounded />
          </IconButton>
        </Tooltip>
        <ClientModal
          isOpen={isClientModalOpen}
          close={() => setClientModalOpen(false)}
        />
      </div>
    </Box>
  );
};
