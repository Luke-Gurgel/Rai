"use client";

import { useState } from "react";
import { MaterialModal } from "./MaterialModal";
import { Material } from "@/api/types/materials";
import { Table as MuiTable } from "@mui/joy";
import { MaterialsTableRow } from "./MaterialsTableRow";
import { LoadingTable } from "@/components/LoadingTable";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";
import { MaterialFormType } from "./types";

export interface MaterialsTableProps {
  materialsTableData: Material[];
}

export const MaterialsTable: React.FC<MaterialsTableProps> = (props) => {
  const [materialToEdit, setMaterialToEdit] = useState<Material | null>(null);
  const [materialToDelete, setMaterialToDelete] = useState<Material | null>(
    null
  );

  if (!props.materialsTableData.length) {
    return <LoadingTable />;
  }

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
            <th>Preço da última compra</th>
            <th>Data da última compra</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {props.materialsTableData.map((material) => (
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
        formType={MaterialFormType.EDIT}
      />
      <ConfirmDeleteModal
        isOpen={!!materialToDelete}
        close={() => setMaterialToDelete(null)}
        material={materialToDelete as Material}
      />
    </>
  );
};
