import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setServices } from "@/store/services";
import { fetchServices } from "@/api/requests/services";

interface Args {
  fetch?: boolean;
}

export const useServices = ({ fetch }: Args) => {
  const dispatch = useAppDispatch();
  const services = useAppSelector((state) => state.services.data);

  useEffect(() => {
    if (fetch && !services.length) {
      fetchServices()
        .then((services) => dispatch(setServices(services)))
        .catch((e) => console.log(e));
    }
  }, [fetch, services.length, dispatch]);

  return { services };
};
