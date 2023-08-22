import { Sheet, Typography, Table, IconButton } from "@mui/joy";
import { Material } from "@/api/types/materials";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import "./styles.css";

interface Props {
  material: Material;
}

export const CollapsibleRow = (props: Props) => {
  return (
    <tr>
      <td style={{ height: 0, padding: 0 }} colSpan={8}>
        <Sheet className="bg-slate-100 flex flex-col gap-y-2 p-3">
          <Typography level="body-lg" component="div">
            Unidades por lotes
          </Typography>
          <Table size="md" variant="outlined" borderAxis="xBetween">
            <thead>
              <tr>
                <th>Lote</th>
                <th>Quantidade</th>
                <th>Validade</th>
                <th />
              </tr>
            </thead>
            <tbody className="bg-white">
              {props.material.lotes.map((lotInfo) => (
                <tr key={lotInfo.lote}>
                  <td>{lotInfo.lote}</td>
                  <td>{lotInfo.quantity}</td>
                  <td>{lotInfo.expDate}</td>
                  <td>
                    <div>
                      <IconButton size="sm" className="icon-button gap-x-1">
                        <EditRoundedIcon fontSize="small" />
                        Editar
                      </IconButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>
      </td>
    </tr>
  );
};
