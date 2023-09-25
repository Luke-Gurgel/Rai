export interface Service {
  serviceId: number;
  name: string;
  materialIds: number[];
}

export interface ServiceOrder {
  serviceOrderId: number;
  serviceId: number;
  clientId: number;
  dateTime: string;
  warranty: number;
  additionalInfo: string;
}
