import { env } from "@/utils/env";
import { Service, ServiceOrder } from "../types/services";

const servicesUrl = env.apiUrl + "/services";
const serviceOrdersUrl = env.apiUrl + "/service-orders";

export const fetchServiceOrders = async (
  month: number,
  year: number
): Promise<ServiceOrder[]> => {
  const queryString = `?month=${month}&year=${year}`;
  const res = await fetch(serviceOrdersUrl + queryString);
  const { serviceOrders }: { serviceOrders: ServiceOrder[] } = await res.json();
  return serviceOrders;
};

export const fetchServices = async (): Promise<Service[]> => {
  const res = await fetch(servicesUrl);
  const { services }: { services: Service[] } = await res.json();
  return services;
};
