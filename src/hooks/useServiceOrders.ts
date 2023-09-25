import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setServiceOrders } from "@/store/serviceOrders";
import { fetchServiceOrders } from "@/api/requests/services";

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
      .catch((e) => console.log(e));
  }, [month, year, dispatch]);

  return { serviceOrders };
};
