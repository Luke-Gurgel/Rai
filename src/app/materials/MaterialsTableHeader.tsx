"use client";

import { useState } from "react";
import { Box, IconButton, Typography, Tooltip } from "@mui/joy";
import { FilterList, AddCircleRounded, Add } from "@mui/icons-material";
import { RegisterNewMaterialModal } from "./RegisterNewMaterialModal";

export const MaterialsTableHeader = () => {
  const [isRegisterNewMaterialModalOpen, setIsRegisterNewMaterialModalOpen] =
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
            onClick={() => setIsRegisterNewMaterialModalOpen(true)}
          >
            <AddCircleRounded />
          </IconButton>
        </Tooltip>
        <Tooltip title="Filtrar materiais" variant="soft" placement="top">
          <IconButton size="sm" variant="outlined" color="neutral">
            <FilterList />
          </IconButton>
        </Tooltip>
        <RegisterNewMaterialModal
          isOpen={isRegisterNewMaterialModalOpen}
          close={() => setIsRegisterNewMaterialModalOpen(false)}
        />
      </div>
    </Box>
  );
};
