import { describe, it, expect } from "vitest";
import { validateCnpj, formatCnpj } from "../cnpj";

describe("CNPJ utils", () => {
  describe("validateCnpj", () => {
    it("returns true if the CNPJ is valid and false otherwise", () => {
      const cnpj1 = "12.345.678/0001-23";
      const cnpj2 = "00.000.000/0000-00";
      expect(validateCnpj(cnpj1)).toBe(false);
      expect(validateCnpj(cnpj2)).toBe(true);
    });
  });

  describe("formatCnpj", () => {
    it("takes a CNPJ string that only contains digits and returns a formatted string", () => {
      expect(formatCnpj("00000000000000")).toBe("00.000.000/0000-00");
    });

    it("returns an error string if CNPJ is invalid", () => {
      expect(formatCnpj("31231321321")).toBe("CNPJ inválido");
    });
  });
});
