import { Typography } from "@mui/joy";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Typography level="h2">To Do</Typography>
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
