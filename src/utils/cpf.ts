export function validateCpf(cpf: string) {
  // Remove characters that are not digits
  cpf = cpf.replace(/[^\d]/g, "");

  // Check if the CPF length is 11 digits
  if (cpf.length !== 11) {
    return false;
  }

  // Check for known invalid CPF patterns
  const invalidPatterns = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];
  if (invalidPatterns.includes(cpf)) {
    return false;
  }

  // Calculate the first verification digit
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf[i]) * (10 - i);
  }
  let firstDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  // Calculate the second verification digit
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf[i]) * (11 - i);
  }
  let secondDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  // Compare the calculated digits with the provided digits
  if (parseInt(cpf[9]) === firstDigit && parseInt(cpf[10]) === secondDigit) {
    return true;
  } else {
    return false;
  }
}

export const formatCpf = (cpf?: string): string | undefined => {
  if (cpf && !validateCpf(cpf)) {
    return "CPF inválido";
  }

  return cpf?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};
