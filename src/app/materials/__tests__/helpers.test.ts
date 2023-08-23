import { describe, it, expect } from "vitest";
import { mockMaterialsData } from "__mocks__/materials";
import { isLowInventory, applyMaterialFilters } from "../helpers";

describe("Material filters helpers", () => {
  describe("isLowInventory fn", () => {
    it("returns true if material total inventory quantity is lesss than or equal to its minimum quantity", () => {
      const output = isLowInventory(mockMaterialsData[2]);
      expect(output).toBe(true);
    });

    it("returns false if material total inventory quantity is higher than its minimum quantity", () => {
      const output = isLowInventory(mockMaterialsData[1]);
      expect(output).toBe(false);
    });
  });

  describe("applyMaterialFilters fn", () => {
    it("returns filtered list with only materials that are low on inventory", () => {
      const filteredMaterials = applyMaterialFilters(mockMaterialsData, {
        belowMinQuantity: true,
      });
      expect(filteredMaterials).toEqual([mockMaterialsData[2]]);
    });

    it("returns original list when no filter is applied", () => {
      const filteredMaterials = applyMaterialFilters(mockMaterialsData, {
        belowMinQuantity: false,
      });
      expect(filteredMaterials).toEqual(mockMaterialsData);
    });
  });
});
