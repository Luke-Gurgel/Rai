import { Stack } from "@mui/joy";
import { MaterialsTableHeader } from "./MaterialsTableHeader";
import { MaterialsTable } from "@/app/materials/MaterialsTable";
import "./styles.css";

export default function MaterialsPage() {
  return (
    <div className="page-container">
      <Stack spacing={2}>
        <MaterialsTableHeader />
        <MaterialsTable />
      </Stack>
    </div>
  );
}

// Materials Table
// - registrar material
// - editar material (atualizar quantidade minima, consertar grupo quimico e/ou principio ativo)
// - deletar material

// Mateials Stock Table
// - adicionar material ao estoque (acrescentar 1 ou mais a coluna "quantity")
// - remover material do estoque (reduzir da coluna "quantity")
// - editar material em estoque (consertar exp date ou lote)
