import { Stack, Sheet, Skeleton } from "@mui/joy";

export const LoadingTable = () => {
  return (
    <Stack>
      <Sheet variant="plain" className="bg-slate-200 p-4">
        <Skeleton variant="text" level="h2" />
        <Skeleton variant="text" level="h2" />
        <Skeleton variant="text" level="h2" />
      </Sheet>
    </Stack>
  );
};
