import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { fetchClients } from "@/api/requests/clients";
import { setClients } from "@/store/clients";
import { toast } from "sonner";

export const useClients = () => {
  const dispatch = useAppDispatch();
  const clients = useAppSelector((state) => state.clients.data);

  useEffect(() => {
    if (!clients.length) {
      fetchClients()
        .then((clients) => dispatch(setClients(clients)))
        .catch((e) => toast.error("Failed to fetch clients. " + e));
    }
  }, [clients.length, dispatch]);
};
