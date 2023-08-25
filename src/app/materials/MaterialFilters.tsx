"use client";

import { useState } from "react";
import Menu from "@mui/joy/Menu";
import Checkbox from "@mui/joy/Checkbox";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import MenuButton from "@mui/joy/MenuButton";
import { useAppDispatch } from "@/store/hooks";
import { FilterList } from "@mui/icons-material";
import { Tooltip, IconButton, Button } from "@mui/joy";
import { MaterialCategory } from "@/api/types/materials";
import { MaterialCategorySelect } from "@/components/MaterialCategorySelect";
import {
  emptyFilters,
  filterMaterials,
  MaterialsFilters,
} from "@/store/materials";

export const MaterialFilters = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<MaterialsFilters>(emptyFilters);

  const onSubmit = (filters: MaterialsFilters) => {
    setOpen(false);
    dispatch(filterMaterials(filters));
  };

  const clearFilters = () => {
    setOpen(false);
    setFilters(emptyFilters);
    dispatch(filterMaterials(emptyFilters));
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
      <Menu variant="outlined" size="md" placement="bottom-end">
        <MenuItem>
          <Checkbox
            size="md"
            variant="outlined"
            label="Baixo estoque"
            checked={filters.belowMinQuantity}
            onChange={(e) =>
              setFilters({ ...filters, belowMinQuantity: e.target.checked })
            }
          />
        </MenuItem>
        <MenuItem>
          <Checkbox
            size="md"
            variant="outlined"
            label="Expirados"
            checked={filters.expired}
            onChange={(e) =>
              setFilters({ ...filters, expired: e.target.checked })
            }
          />
        </MenuItem>
        <MenuItem className="flex justify-center gap-x-2">
          <Checkbox
            size="md"
            variant="outlined"
            label="Categoria"
            checked={filters.category.checked}
            onChange={(e) =>
              setFilters({
                ...filters,
                category: {
                  checked: e.target.checked,
                  category: filters.category.category,
                },
              })
            }
          />
          <MaterialCategorySelect
            size="sm"
            sx={{ minWidth: 150 }}
            defaultValue={filters.category.category}
            onChange={(_, category) =>
              setFilters({
                ...filters,
                category: {
                  ...filters.category,
                  category: category as MaterialCategory,
                },
              })
            }
          />
        </MenuItem>
        <MenuItem className="flex justify-center gap-x-4">
          <Button
            size="sm"
            variant="outlined"
            className="no-bg-button p-2"
            onClick={clearFilters}
          >
            Limpar
          </Button>
          <Button
            size="sm"
            variant="outlined"
            className="no-bg-button p-2"
            onClick={() => onSubmit(filters)}
          >
            Filtrar
          </Button>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
};
