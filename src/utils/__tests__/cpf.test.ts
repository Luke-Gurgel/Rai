import { describe, it, expect } from "vitest";
import { validateCpf, formatCpf } from "../cpf";

describe("CPF utils", () => {
  describe("validateCpf", () => {
    it("returns true if the CPF is valid and false otherwise", () => {
      expect(validateCpf("123.456.789-09")).toBe(true);
      expect(validateCpf("111.222.333-44")).toBe(false);
    });
  });

  describe("formatCpf", () => {
    it("takes a CPF string that only contains digits and returns a formatted string", () => {
      expect(formatCpf("12345678909")).toBe("123.456.789-09");
    });

    it("returns an error string if CPF is invalid", () => {
      expect(formatCpf("11122233344")).toBe("CPF inválido");
    });
  });
});
