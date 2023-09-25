import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { fetchClients } from "@/api/requests/clients";
import { setClients } from "@/store/clients";

export const useClients = () => {
  const dispatch = useAppDispatch();
  const clients = useAppSelector((state) => state.clients.data);

  useEffect(() => {
    if (!clients.length) {
      fetchClients()
        .then((clients) => dispatch(setClients(clients)))
        .catch((e) => console.log(e));
    }
  }, [dispatch, clients.length]);

  return { clients };
};
