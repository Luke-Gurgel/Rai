"use client";

import { useState } from "react";
import Menu from "@mui/joy/Menu";
import Checkbox from "@mui/joy/Checkbox";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import MenuButton from "@mui/joy/MenuButton";
import { FilterList } from "@mui/icons-material";
import { Tooltip, IconButton, Button } from "@mui/joy";

export const MaterialFilters = () => {
  const [open, setOpen] = useState(false);

  const filterMaterials = () => {
    setOpen(false);
  };

  return (
    <Dropdown open={open}>
      <Tooltip title="Filtrar materiais" variant="soft" placement="top">
        <MenuButton
          onClick={() => setOpen(!open)}
          slots={{ root: IconButton }}
          slotProps={{
            root: { variant: "outlined", size: "sm", color: "neutral" },
          }}
        >
          <FilterList />
        </MenuButton>
      </Tooltip>
      <Menu variant="plain" size="md" placement="bottom-end">
        <MenuItem>
          <Checkbox label="< quant. mín." size="md" variant="outlined" />
        </MenuItem>
        <MenuItem className="flex justify-center">
          <Button
            size="sm"
            variant="plain"
            className="no-bg-button p-0"
            onClick={filterMaterials}
          >
            Filtrar
          </Button>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
};
