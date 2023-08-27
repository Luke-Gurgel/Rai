export const formatPhoneNumber = (phoneNumber: string): string => {
  return phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/g, "($1) $2-$3");
};
