import { Stack } from "@mui/joy";
import { ScheduleHeader } from "./ScheduleHeader";
import { Schedule } from "./Schedule";

export default function SchedulePage() {
  return (
    <Stack spacing={2}>
      <ScheduleHeader />
      <Schedule />
    </Stack>
  );
}
