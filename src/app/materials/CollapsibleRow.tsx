"use client";

import { useState } from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { Material, MaterialInventory } from "@/api/types/materials";
import { Box, Sheet, Typography, Table, IconButton, Tooltip } from "@mui/joy";
import { MaterialInventoryModal } from "./MaterialInventoryModal";
import { AddCircleRounded } from "@mui/icons-material";
import { format } from "date-fns";
import "./styles.css";

interface Props {
  material: Material;
}

interface InventoryModalState {
  open: boolean;
  inventoryToEdit?: MaterialInventory;
}

export const CollapsibleRow = (props: Props) => {
  const defaultModalState = { open: false };
  const [inventoryModalState, setInventoryModalState] =
    useState<InventoryModalState>(defaultModalState);

  const editMaterialInventory = (materialInventory: MaterialInventory) => {
    setInventoryModalState({ inventoryToEdit: materialInventory, open: true });
  };

  const addtMaterialInventory = () => {
    setInventoryModalState({ open: true });
  };

  return (
    <>
      <tr>
        <td style={{ height: 0, padding: 0 }} colSpan={6}>
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
                <IconButton
                  size="sm"
                  color="neutral"
                  variant="outlined"
                  onClick={addtMaterialInventory}
                >
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
                  <th>Preço</th>
                  <th>Data da compra</th>
                  <th />
                </tr>
              </thead>
              <tbody className="bg-white">
                {props.material.inventory.map((materialInventory) => (
                  <tr key={materialInventory.lote}>
                    <td>{materialInventory.lote}</td>
                    <td>{materialInventory.quantity}</td>
                    <td>
                      {format(
                        new Date(materialInventory.expDate),
                        "dd/MM/yyyy"
                      )}
                    </td>
                    <td>
                      {materialInventory.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td>
                      {format(
                        new Date(materialInventory.purchaseDate),
                        "dd/MM/yyyy"
                      )}
                    </td>
                    <td>
                      <div className="flex justify-end">
                        <IconButton
                          size="sm"
                          className="no-bg-button gap-x-1"
                          onClick={() =>
                            editMaterialInventory(materialInventory)
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
        isOpen={inventoryModalState.open}
        materialInventory={inventoryModalState.inventoryToEdit}
        close={() => setInventoryModalState(defaultModalState)}
      />
    </>
  );
};
