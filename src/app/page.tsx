import { Typography } from "@mui/joy";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Typography level="h2">To Do</Typography>
      <Typography level="h4" className="mt-2">
        Formato do nome do arquivo pdf da O.S
      </Typography>
      <li className="ml-4">
        <Typography level="body-md">
          O formato que eles querem é O.S-numeração-nome-dataThorario <br />
          Para criar essa numeração temos que buscar o ID da ultima ordem de
          serviço e somar 1
        </Typography>
      </li>
      <Typography level="h4" className="mt-2">
        Categorias
      </Typography>
      <li className="ml-4">
        <Typography level="body-md">
          Seria bom poder categorizar os serviços tbm, ex.: RATO, INSETO, etc.
          <br />
          Ao listar os serviços, podemos pegar a(s) categoria(s) dos materiais e
          categorizar o serviço tbm
          <br />E na hora de criar uma nova S.O o select dos serviços poderia
          ser grupado
        </Typography>
      </li>
      <Typography level="h4" className="mt-2">
        Schedule
      </Typography>
      <li className="ml-4">
        <Typography level="body-md">
          prevent users from editing a past S.O (hide the button if
          props.serviceOrder.dateTime is in the past)
        </Typography>
      </li>
      <li className="ml-4">
        <Typography level="body-md">
          sort the S.O’s in the table from earliest to latest
        </Typography>
      </li>
      <Typography level="h4" className="mt-2">
        Materials
      </Typography>
      <li className="ml-4">
        <Typography level="body-md">
          sort the list in a way that groups materials of the same category
          together by default
        </Typography>
      </li>
      <li className="ml-4">
        <Typography level="body-md">
          enable sorting by total quantity
        </Typography>
      </li>
      <Typography level="h4" className="mt-2">
        Clients
      </Typography>
      <li className="ml-4">
        <Typography level="body-md">
          sort the list in a way that groups clients of the same type (PF and
          PJ) together by default
        </Typography>
      </li>
    </div>
  );
}
