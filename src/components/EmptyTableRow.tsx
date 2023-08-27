import { Sheet, Typography } from "@mui/joy";

interface Props {
  colSpan: number;
}

export const EmptyTableRow: React.FC<Props> = ({ colSpan }) => {
  return (
    <tr>
      <td colSpan={colSpan}>
        <Sheet className="bg-slate-100 flex flex-col items-center p-10">
          <Typography level="h3">Nada para mostrar</Typography>
          <Typography level="h1">🤷</Typography>
        </Sheet>
      </td>
    </tr>
  );
};
