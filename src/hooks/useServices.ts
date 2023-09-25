import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setServices } from "@/store/services";
import { fetchServices } from "@/api/requests/services";

export const useServices = () => {
  const dispatch = useAppDispatch();
  const services = useAppSelector((state) => state.services.data);

  useEffect(() => {
    if (!services.length) {
      fetchServices()
        .then((services) => dispatch(setServices(services)))
        .catch((e) => console.log(e));
    }
  }, [dispatch, services.length]);

  return { services };
};
