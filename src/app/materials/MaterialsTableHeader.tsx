"use client";

import { useState } from "react";
import { Box, IconButton, Typography, Tooltip } from "@mui/joy";
import { FilterList, AddCircleRounded } from "@mui/icons-material";
import { MaterialModal } from "./MaterialModal";
import { MaterialFormType } from "./types";

export const MaterialsTableHeader = () => {
  const [isRegisterMaterialModalOpen, setIsRegisterMaterialModalOpen] =
    useState(false);

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
            onClick={() => setIsRegisterMaterialModalOpen(true)}
          >
            <AddCircleRounded />
          </IconButton>
        </Tooltip>
        <Tooltip title="Filtrar materiais" variant="soft" placement="top">
          <IconButton size="sm" variant="outlined" color="neutral">
            <FilterList />
          </IconButton>
        </Tooltip>
        <MaterialModal
          isOpen={isRegisterMaterialModalOpen}
          close={() => setIsRegisterMaterialModalOpen(false)}
          formType={MaterialFormType.RESGISTER}
        />
      </div>
    </Box>
  );
};
