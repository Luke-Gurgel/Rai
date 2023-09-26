"use client";

import { useState } from "react";
import Menu from "@mui/joy/Menu";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Checkbox from "@mui/joy/Checkbox";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import MenuButton from "@mui/joy/MenuButton";
import { FilterList } from "@mui/icons-material";
import { Tooltip, IconButton, Button } from "@mui/joy";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  emptyFilters,
  filterMaterials,
  MaterialsFilters,
} from "@/store/materials";

export const MaterialFilters = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const { categories } = useAppSelector((state) => state.materials);
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
          <Select
            size="sm"
            placeholder="Selecione"
            sx={{ minWidth: 150 }}
            defaultValue={filters.category.category}
            onChange={(_, category) =>
              setFilters({
                ...filters,
                category: {
                  ...filters.category,
                  category,
                },
              })
            }
          >
            {categories.map((category) => (
              <Option key={category.categoryId} value={category.name}>
                {category.name}
              </Option>
            ))}
          </Select>
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
