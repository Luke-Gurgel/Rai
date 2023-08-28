"use client";

import { useState } from "react";
import { AddCircleRounded } from "@mui/icons-material";
import { Box, IconButton, Typography, Tooltip } from "@mui/joy";

export const ServicesTableHeader = () => {
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        level="h3"
        id="tableTitle"
        component="div"
        sx={{ flex: "1 1 100%" }}
      >
        Serviços
      </Typography>
      <div className="flex gap-x-2">
        <Tooltip title="Registrar novo serviço" variant="soft" placement="top">
          <IconButton
            size="sm"
            color="neutral"
            variant="outlined"
            onClick={() => setServiceModalOpen(true)}
          >
            <AddCircleRounded />
          </IconButton>
        </Tooltip>
      </div>
    </Box>
  );
};
