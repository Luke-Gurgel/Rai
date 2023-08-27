export function validateCnpj(cnpj: string) {
  // Remove characters that are not digits
  cnpj = cnpj.replace(/[^\d]/g, "");

  // Check if the CNPJ length is 14 digits
  if (cnpj.length !== 14) {
    return false;
  }

  // Calculate the first verification digit
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpj[i]) * (i < 4 ? 5 - i : 13 - i);
  }

  let firstDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  // Calculate the second verification digit
  sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpj[i]) * (i < 5 ? 6 - i : 14 - i);
  }

  let secondDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  // Compare the calculated digits with the provided digits
  if (parseInt(cnpj[12]) === firstDigit && parseInt(cnpj[13]) === secondDigit) {
    return true;
  } else {
    return false;
  }
}

const cnpj1 = "12.345.678/0001-23";
const cnpj2 = "00.000.000/0000-00";
