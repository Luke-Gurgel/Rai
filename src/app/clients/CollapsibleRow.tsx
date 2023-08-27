import { Sheet, Typography } from "@mui/joy";
import { Client, ClientPF, ClientPJ } from "@/api/types/clients";
import { formatAddress } from "@/utils/address";
import { formatCnpj } from "@/utils/cnpj";
import { formatCpf } from "@/utils/cpf";

interface Props {
  client: Client;
}

export const CollapsibleRow = (props: Props) => {
  const pfClient: ClientPF = { ...(props.client as ClientPF) };
  const pjClient: ClientPJ = { ...(props.client as ClientPJ) };

  return (
    <>
      <tr>
        <td style={{ height: 0, padding: 0 }} colSpan={6}>
          <Sheet className="bg-slate-100 flex flex-col px-4 py-2">
            <Sheet className="flex flex-col border-double border-2">
              <Sheet className="flex gap-x-2 divide-x py-2 border-double border-2">
                <Typography className="px-4 w-32">
                  {pfClient.cpf ? "CPF" : "CNPJ"}
                </Typography>
                <Typography className="px-4">
                  {formatCpf(pfClient.cpf) || formatCnpj(pjClient.cnpj)}
                </Typography>
              </Sheet>
              {pjClient.cnpj && (
                <Sheet className="flex gap-x-2 divide-x py-2 border-double border-2">
                  <Typography className="px-4 w-32">Razão Social</Typography>
                  <Typography className="px-4">
                    {pjClient.razaoSocial}
                  </Typography>
                </Sheet>
              )}
              <Sheet className="flex gap-x-2 divide-x py-2 border-double border-2">
                <Typography className="px-4 w-32">Endereço</Typography>
                <Typography className="px-4">
                  {formatAddress(props.client.address)}
                </Typography>
              </Sheet>
            </Sheet>
          </Sheet>
        </td>
      </tr>
    </>
  );
};
