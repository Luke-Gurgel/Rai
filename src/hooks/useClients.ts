import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { fetchClients } from "@/api/requests/clients";
import { setClients } from "@/store/clients";

interface Args {
  fetch?: boolean;
}

export const useClients = ({ fetch }: Args) => {
  const dispatch = useAppDispatch();
  const clients = useAppSelector((state) => state.clients.data);

  useEffect(() => {
    if (fetch && !clients.length) {
      fetchClients()
        .then((clients) => dispatch(setClients(clients)))
        .catch((e) => console.log(e));
    }
  }, [clients.length, fetch, dispatch]);

  return { clients };
};