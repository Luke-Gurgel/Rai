import { Table as MuiTable, Stack, Skeleton } from "@mui/joy";
import { Material } from "@/api/types/materials";
import { LoadingTable } from "@/components/LoadingTable";

export interface MaterialsTableProps {
  materialsTableData: Material[];
}

export const MaterialsTable: React.FC<MaterialsTableProps> = (props) => {
  if (!props.materialsTableData.length) {
    return <LoadingTable />;
  }

  return (
    <MuiTable
      borderAxis="both"
      stripe="odd"
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
          <th>ID</th>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Quantidate</th>
          <th>Quantidate mínima</th>
        </tr>
      </thead>
      <tbody>
        {props.materialsTableData.map((material) => (
          <tr key={material.id}>
            <td>{material.id}</td>
            <td>{material.name}</td>
            <td>{material.category}</td>
            <td>{material.quantity}</td>
            <td>{material.minQuantity}</td>
          </tr>
        ))}
      </tbody>
    </MuiTable>
  );
};
