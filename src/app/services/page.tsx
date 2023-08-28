import { Stack } from "@mui/joy";
import { ServicesTable } from "./ServicesTable";
import { ServicesTableHeader } from "./ServicesTableHeader";

export default function ServicesPage() {
  return (
    <Stack spacing={2}>
      <ServicesTableHeader />
      <ServicesTable />
    </Stack>
  );
}
