import { Sheet, Typography } from "@mui/joy";
import { Service } from "@/api/types/services";

interface Props {
  service: Service;
}

export const CollapsibleRow = (props: Props) => {
  return (
    <tr>
      <td style={{ height: 0, padding: 0 }} colSpan={3}>
        <Sheet className="bg-slate-100 flex flex-col px-4 py-2">
          <Sheet className="flex flex-col border-double border-2">
            <Sheet className="flex gap-x-2 divide-x py-2 border-double border-2">
              <Typography className="px-4 w-32">Materiais</Typography>
              <Typography className="px-4">
                {props.service.materials.reduce((prev, curr) => {
                  return !prev ? curr.name : curr.name + `, ${prev}`;
                }, "")}
              </Typography>
            </Sheet>
          </Sheet>
        </Sheet>
      </td>
    </tr>
  );
};
