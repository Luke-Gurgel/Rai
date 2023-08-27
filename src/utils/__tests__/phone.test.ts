import { formatPhoneNumber } from "../phone";
import { describe, it, expect } from "vitest";
import { clientPFExample } from "__mocks__/clients";

describe("CPF utils", () => {
  describe("formatPhoneNumber", () => {
    it("takes a phone number string that only contains digits and returns a formatted string", () => {
      expect(formatPhoneNumber(clientPFExample.tel)).toBe("(21) 98765-4321");
    });
  });
});
