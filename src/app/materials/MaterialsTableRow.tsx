"use client";

import { useState } from "react";
import { IconButton, Tooltip } from "@mui/joy";
import { Material } from "@/api/types/materials";
import { CollapsibleRow } from "./CollapsibleRow";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./styles.css";

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
        <td>R${props.material.lastPurchasePrice}</td>
        <td>{props.material.lastPurchaseDate}</td>
        <td>
          <div className="flex justify-end">
            <Tooltip title="Editar material" placement="top" variant="soft">
              <IconButton
                size="md"
                className="icon-button"
                onClick={props.onEditButtonClick}
              >
                <EditRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Deletar material" placement="top" variant="soft">
              <IconButton
                size="sm"
                className="icon-button"
                onClick={props.onDeleteButtonClick}
              >
                <DeleteRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </div>
        </td>
      </tr>
      {isCollapsibleRowOpen && <CollapsibleRow material={props.material} />}
    </>
  );
};
