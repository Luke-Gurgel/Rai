import { Sheet, Typography } from "@mui/joy";

export const EmptyTableRow = () => {
  return (
    <tr>
      <td colSpan={6}>
        <Sheet className="bg-slate-100 flex flex-col items-center p-10">
          <Typography level="h3">Nada para mostrar</Typography>
          <Typography level="h1">🤷</Typography>
        </Sheet>
      </td>
    </tr>
  );
};
