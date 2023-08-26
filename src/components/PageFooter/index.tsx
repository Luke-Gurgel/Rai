import { Sheet, Typography } from "@mui/joy";

export const PageFooter = () => {
  return (
    <div className="w-full px-16 py-8 bg-slate-200">
      <Sheet className="bg-transparent flex align-center">
        <Typography level="body-lg">Feito com 💙 por Lucas</Typography>
      </Sheet>
    </div>
  );
};
