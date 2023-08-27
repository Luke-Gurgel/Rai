import { Stack } from "@mui/joy";
import { ClientsTable } from "./ClientsTable";
import { ClientsTableHeader } from "./ClientsTableHeader";

export default function ClientsPage() {
  return (
    <Stack spacing={2}>
      <ClientsTableHeader />
      <ClientsTable />
    </Stack>
  );
}
