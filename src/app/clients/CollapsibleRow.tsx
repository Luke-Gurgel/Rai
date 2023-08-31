import { Sheet, Typography } from "@mui/joy";
import { formatAddress } from "@/utils/address";
import { Client } from "@/api/types/clients";
import { formatCnpj } from "@/utils/cnpj";
import { formatCpf } from "@/utils/cpf";

interface Props {
  client: Client<unknown>;
}

export const CollapsibleRow = ({ client }: Props) => {
  return (
    <>
      <tr>
        <td style={{ height: 0, padding: 0 }} colSpan={6}>
          <Sheet className="bg-slate-100 flex flex-col px-4 py-2">
            <Sheet className="flex flex-col border-double border-2">
              <Sheet className="flex gap-x-2 divide-x py-2 border-double border-2">
                <Typography className="px-4 w-32">
                  {client.type === "PF" ? "CPF" : "CNPJ"}
                </Typography>
                <Typography className="px-4">
                  {client.type === "PF" && formatCpf(client.cpf)}
                  {client.type === "PJ" && formatCnpj(client.cnpj)}
                </Typography>
              </Sheet>
              {client.type === "PJ" && (
                <Sheet className="flex gap-x-2 divide-x py-2 border-double border-2">
                  <Typography className="px-4 w-32">Razão Social</Typography>
                  <Typography className="px-4">{client.razaoSocial}</Typography>
                </Sheet>
              )}
              <Sheet className="flex gap-x-2 divide-x py-2 border-double border-2">
                <Typography className="px-4 w-32">Endereço</Typography>
                <Typography className="px-4">
                  {formatAddress(client.address)}
                </Typography>
              </Sheet>
              {client.address.complement && (
                <Sheet className="flex gap-x-2 divide-x py-2 border-double border-2">
                  <Typography className="px-4 w-32">Complemento</Typography>
                  <Typography className="px-4">
                    {client.address.complement}
                  </Typography>
                </Sheet>
              )}
            </Sheet>
          </Sheet>
        </td>
      </tr>
    </>
  );
};
