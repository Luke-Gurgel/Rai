import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setServices } from "@/store/services";
import { fetchServices } from "@/api/requests/services";
import { toast } from "sonner";

export const useServices = () => {
  const dispatch = useAppDispatch();
  const services = useAppSelector((state) => state.services.data);

  useEffect(() => {
    if (!services.length) {
      fetchServices()
        .then((services) => dispatch(setServices(services)))
        .catch((e) => toast.error("Failed to fetch services. " + e));
    }
  }, [services.length, dispatch]);

  return { services };
};
