"use client";

import { useState } from "react";
import { Button, IconButton } from "@mui/joy";
import { Material } from "@/api/types/materials";
import { CollapsibleRow } from "./CollapsibleRow";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  material: Material;
  onEditButtonClick: () => void;
  onDeleteButtonClick: () => void;
}

export const MaterialsTableRow = (props: Props) => {
  const [isCollapsibleRowOpen, setIsCollapsibleRowOpen] = useState(false);

  const toggleCollapsibleRow = () => {
    setIsCollapsibleRowOpen(!isCollapsibleRowOpen);
  };

  return (
    <>
      <tr key={props.material.id}>
        <td className="bg-slate-700">
          <IconButton
            size="sm"
            variant="plain"
            aria-label="expand row"
            onClick={toggleCollapsibleRow}
            className="hover:bg-transparent text-slate-600 hover:text-slate-900"
          >
            {isCollapsibleRowOpen ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </td>
        <td>{props.material.name}</td>
        <td>{props.material.category}</td>
        <td>{props.material.totalQuantityInStock}</td>
        <td>{props.material.minQuantity}</td>
        <td>{props.material.lastPurchasePrice}</td>
        <td>{props.material.lastPurchaseDate}</td>
        <td>
          <div className="flex justify-end gap-x-2">
            <Button
              size="sm"
              className="bg-sky-500 hover:bg-sky-400 text-white"
              onClick={props.onEditButtonClick}
            >
              <EditRoundedIcon fontSize="small" />
            </Button>
            <Button
              size="sm"
              className="bg-red-400 hover:bg-red-300 text-white"
              onClick={props.onDeleteButtonClick}
            >
              <DeleteRoundedIcon fontSize="small" />
            </Button>
          </div>
        </td>
      </tr>
      {isCollapsibleRowOpen && <CollapsibleRow material={props.material} />}
    </>
  );
};
