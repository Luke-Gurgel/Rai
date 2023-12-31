"use client";

import { useState } from "react";
import { Table as MuiTable } from "@mui/joy";
import { MaterialModal } from "./MaterialModal";
import { Material } from "@/api/types/materials";
import { MaterialsTableRow } from "./MaterialsTableRow";
import { LoadingTable } from "@/components/LoadingTable";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";
import { EmptyTableRow } from "@/components/EmptyTableRow";
import { useMaterials } from "@/hooks/useMaterials";
import { applyMaterialFilters } from "./filters";

export const MaterialsTable: React.FC = () => {
  const { materials, filters } = useMaterials();
  const [materialToEdit, setMaterialToEdit] = useState<Material | null>(null);
  const [materialToDelete, setMaterialToDelete] = useState<Material | null>(
    null
  );

  if (!materials.length) {
    return <LoadingTable />;
  }

  const filteredMaterials = applyMaterialFilters(materials, filters);

  return (
    <>
      <MuiTable
        variant="outlined"
        borderAxis="xBetween"
        hoverRow={!!filteredMaterials.length}
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
          {!filteredMaterials.length && <EmptyTableRow colSpan={6} />}
          {!!filteredMaterials.length &&
            filteredMaterials.map((material) => (
              <MaterialsTableRow
                material={material}
                key={material.materialId}
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
