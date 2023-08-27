"use client";

import Link from "next/link";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListDivider from "@mui/joy/ListDivider";
import Person from "@mui/icons-material/Person";
import ListItemButton from "@mui/joy/ListItemButton";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const path = usePathname();

  const isClientsPage = path.includes("clients");
  const isSchedulePage = path.includes("schedule");
  const isMaterialsPage = path.includes("materials");

  return (
    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List role="menubar" orientation="horizontal">
        <ListItem role="none">
          <Link href="/schedule">
            <ListItemButton role="menuitem" className="gap-x-2">
              <CalendarMonthRoundedIcon fontSize="small" />
              {isSchedulePage ? (
                <strong>
                  <i>Agenda</i>
                </strong>
              ) : (
                "Agenda"
              )}
            </ListItemButton>
          </Link>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <Link href="/clients">
            <ListItemButton role="menuitem" className="gap-x-2">
              <Diversity3OutlinedIcon />
              {isClientsPage ? (
                <strong>
                  <i>Clientes</i>
                </strong>
              ) : (
                "Clientes"
              )}
            </ListItemButton>
          </Link>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <Link href="/materials">
            <ListItemButton role="menuitem" className="gap-x-2">
              <Inventory2OutlinedIcon fontSize="small" />
              {isMaterialsPage ? (
                <strong>
                  <i>Materiais</i>
                </strong>
              ) : (
                "Materiais"
              )}
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem role="none" sx={{ marginInlineStart: "auto" }}>
          <ListItemButton component="a" role="menuitem" href="#horizontal-list">
            <Person />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
