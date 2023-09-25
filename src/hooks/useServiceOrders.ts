import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setServiceOrders } from "@/store/serviceOrders";
import { fetchServiceOrders } from "@/api/requests/services";
import { toast } from "sonner";

export const useServiceOrders = (month: number, year: number) => {
  const dispatch = useAppDispatch();
  const serviceOrders = useAppSelector((state) => state.serviceOrders.data);

  useEffect(() => {
    fetchServiceOrders(month, year)
      .then((serviceOrders) => dispatch(setServiceOrders(serviceOrders)))
      .catch((e) => toast.error("Failed to fetch service orders. " + e));
  }, [month, year, dispatch]);

  return { serviceOrders };
};
