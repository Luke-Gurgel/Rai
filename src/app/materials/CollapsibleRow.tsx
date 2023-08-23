"use client";

import { useState } from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { Material, MaterialInventory } from "@/api/types/materials";
import { Box, Sheet, Typography, Table, IconButton, Tooltip } from "@mui/joy";
import { MaterialInventoryModal } from "./MaterialInventoryModal";
import { AddCircleRounded } from "@mui/icons-material";
import "./styles.css";

interface Props {
  material: Material;
}

export const CollapsibleRow = (props: Props) => {
  const [materiaInventoryToEdit, setMateriaInventoryToEdit] =
    useState<MaterialInventory | null>(null);

  return (
    <>
      <tr>
        <td style={{ height: 0, padding: 0 }} colSpan={8}>
          <Sheet className="bg-slate-100 flex flex-col gap-y-2 p-3">
            <Box className="flex justify-between">
              <Typography level="body-lg" component="div">
                Unidades em estoque por lote
              </Typography>
              <Tooltip
                variant="soft"
                placement="top"
                title="Adicionar ao estoque"
              >
                <IconButton size="sm" color="neutral" variant="outlined">
                  <AddCircleRounded />
                </IconButton>
              </Tooltip>
            </Box>
            <Table size="md" variant="outlined" borderAxis="xBetween">
              <thead>
                <tr>
                  <th>Lote</th>
                  <th>Quantidade</th>
                  <th>Validade</th>
                  <th />
                </tr>
              </thead>
              <tbody className="bg-white">
                {props.material.lotes.map((materialInventory) => (
                  <tr key={materialInventory.lote}>
                    <td>{materialInventory.lote}</td>
                    <td>{materialInventory.quantity}</td>
                    <td>{materialInventory.expDate}</td>
                    <td>
                      <div>
                        <IconButton
                          size="sm"
                          className="no-bg-button gap-x-1"
                          onClick={() =>
                            setMateriaInventoryToEdit(materialInventory)
                          }
                        >
                          <EditRoundedIcon fontSize="small" />
                          Editar
                        </IconButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Sheet>
        </td>
      </tr>
      <MaterialInventoryModal
        material={props.material}
        isOpen={!!materiaInventoryToEdit}
        materialInventory={materiaInventoryToEdit as MaterialInventory}
        close={() => setMateriaInventoryToEdit(null)}
      />
    </>
  );
};
