import { Stack } from "@mui/joy";
import { MaterialsTableHeader } from "./MaterialsTableHeader";
import { MaterialsTable } from "@/app/materials/MaterialsTable";
import "./styles.css";

export default function MaterialsPage() {
  return (
    <Stack spacing={2}>
      <MaterialsTableHeader />
      <MaterialsTable />
    </Stack>
  );
}
