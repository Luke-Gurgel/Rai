"use client";

import { useState } from "react";
import { Box, IconButton, Typography, Tooltip } from "@mui/joy";
import { AddCircleRounded } from "@mui/icons-material";
import { MaterialFilters } from "./MaterialFilters";
import { MaterialModal } from "./MaterialModal";

export const MaterialsTableHeader = () => {
  const [isMaterialModalOpen, setMaterialModalOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        level="h3"
        id="tableTitle"
        component="div"
        sx={{ flex: "1 1 100%" }}
      >
        Materiais
      </Typography>
      <div className="flex gap-x-2">
        <Tooltip title="Registrar novo material" variant="soft" placement="top">
          <IconButton
            size="sm"
            color="neutral"
            variant="outlined"
            onClick={() => setMaterialModalOpen(true)}
          >
            <AddCircleRounded />
          </IconButton>
        </Tooltip>
        <MaterialFilters />
        <MaterialModal
          isOpen={isMaterialModalOpen}
          close={() => setMaterialModalOpen(false)}
        />
      </div>
    </Box>
  );
};
