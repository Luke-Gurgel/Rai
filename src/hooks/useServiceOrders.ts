import { useState, useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setServiceOrders } from "@/store/serviceOrders";
import { fetchServiceOrders } from "@/api/requests/services";

export const useServiceOrders = (month: number, year: number) => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | undefined>();
  const serviceOrders = useAppSelector((state) => state.serviceOrders.data);

  useEffect(() => {
    fetchServiceOrders(month, year)
      .then((serviceOrders) => dispatch(setServiceOrders(serviceOrders)))
      .catch((e) => setError(e));
  }, [month, year, dispatch]);

  return { serviceOrders, error };
};
