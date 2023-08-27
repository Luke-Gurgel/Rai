import { describe, it, expect } from "vitest";
import { formatAddress, formatCep } from "../address";
import { addressExample, addressExample2 } from "__mocks__/clients";

describe("Address utils", () => {
  describe("formatAddress", () => {
    it("takes an Address object and returns a user friendly string", () => {
      expect(formatAddress(addressExample)).toBe(
        "Rua Principal, 123, Bairro Central - Cidade Grande, SG - 41701-015"
      );

      expect(formatAddress(addressExample2)).toBe(
        "Avenida Central, 456, Bairro Novo - Cidade Pequena, SP - 40150-140"
      );
    });
  });

  describe("formatCep", () => {
    it("takes a CEP string and returns a user friendly string", () => {
      expect(formatCep(addressExample.cep)).toBe("41701-015");
      expect(formatCep(addressExample2.cep)).toBe("40150-140");
    });

    it("returns an error string if the CEP is invalid", () => {
      expect(formatCep("jdsajdsa")).toBe("cep inválido");
      expect(formatCep("89032890421")).toBe("cep inválido");
      expect(formatCep("8900")).toBe("cep inválido");
    });
  });
});
