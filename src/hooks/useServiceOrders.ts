import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setServiceOrders } from "@/store/serviceOrders";
import { fetchServiceOrders } from "@/api/requests/services";
import { toast } from "sonner";

interface Args {
  year: number;
  month: number;
}

export const useServiceOrders = ({ month, year }: Args) => {
  const dispatch = useAppDispatch();
  const serviceOrders = useAppSelector((state) => state.serviceOrders.data);

  useEffect(() => {
    fetchServiceOrders(month, year)
      .then((serviceOrders) => dispatch(setServiceOrders(serviceOrders)))
      .catch((e) => toast.error("Failed to fetch Service Orders: ", e.message));
  }, [month, year, dispatch]);

  return { serviceOrders };
};
