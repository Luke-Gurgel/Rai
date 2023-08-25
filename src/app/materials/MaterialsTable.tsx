"use client";

import { useState } from "react";
import { Table as MuiTable } from "@mui/joy";
import { MaterialModal } from "./MaterialModal";
import { Material } from "@/api/types/materials";
import { MaterialsTableRow } from "./MaterialsTableRow";
import { LoadingTable } from "@/components/LoadingTable";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";
import { applyMaterialFilters } from "./helpers";
import { useAppSelector } from "@/store/hooks";

export const MaterialsTable: React.FC = () => {
  const materialsState = useAppSelector((state) => state.materials);
  const [materialToEdit, setMaterialToEdit] = useState<Material | null>(null);
  const [materialToDelete, setMaterialToDelete] = useState<Material | null>(
    null
  );

  if (!materialsState.data.length) {
    return <LoadingTable />;
  }

  const filteredMaterials = applyMaterialFilters(
    materialsState.data,
    materialsState.filters
  );

  return (
    <>
      <MuiTable
        variant="outlined"
        borderAxis="xBetween"
        hoverRow
        sx={{
          "& tr > *:first-child": {
            position: "sticky",
            left: 0,
          },
          "& tr > *:last-child": {
            position: "sticky",
            right: 0,
          },
        }}
      >
        <thead>
          <tr>
            <th style={{ width: 50 }} aria-label="empty" />
            <th>Nome</th>
            <th>Categoria</th>
            <th>Quantidate total</th>
            <th>Quantidate mínima</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {filteredMaterials.map((material) => (
            <MaterialsTableRow
              key={material.id}
              material={material}
              onEditButtonClick={() => setMaterialToEdit(material)}
              onDeleteButtonClick={() => setMaterialToDelete(material)}
            />
          ))}
        </tbody>
      </MuiTable>
      <MaterialModal
        isOpen={!!materialToEdit}
        close={() => setMaterialToEdit(null)}
        material={materialToEdit as Material}
      />
      <ConfirmDeleteModal
        isOpen={!!materialToDelete}
        close={() => setMaterialToDelete(null)}
        material={materialToDelete as Material}
      />
    </>
  );
};
