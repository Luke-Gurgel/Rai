import { Sheet, Typography } from "@mui/joy";
import { Nav } from "./Nav";

export const PageHeader = () => {
  return (
    <div className="sticky top-0 z-50 w-full px-16 py-8 bg-slate-200 opacity-90">
      <Sheet className="bg-transparent flex align-center gap-x-2">
        <Typography level="h3">Rai&apos;s app</Typography>
        <Nav />
      </Sheet>
    </div>
  );
};
