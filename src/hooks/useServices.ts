import { useState, useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setServices } from "@/store/services";
import { fetchServices } from "@/api/requests/services";

export const useServices = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | undefined>();
  const services = useAppSelector((state) => state.services.data);

  useEffect(() => {
    if (!services.length) {
      fetchServices()
        .then((services) => dispatch(setServices(services)))
        .catch((e) => setError(e));
    }
  }, [dispatch, services.length]);

  return { services, error };
};
