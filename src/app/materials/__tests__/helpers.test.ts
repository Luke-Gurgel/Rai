import { describe, it, expect } from "vitest";
import { mockMaterialsData } from "__mocks__/materials";
import { MaterialCategory } from "@/api/types/materials";
import {
  isLowInventory,
  applyMaterialFilters,
  containsExpiredInventory,
  getTotalQuantityInInventory,
} from "../filters";

describe("Material filters helpers", () => {
  describe("getTotalQuantityInInventory fn", () => {
    it("returns true if material total inventory quantity is lesss than or equal to its minimum quantity", () => {
      expect(getTotalQuantityInInventory(mockMaterialsData[0])).toBe(20);
      expect(getTotalQuantityInInventory(mockMaterialsData[1])).toBe(10);
      expect(getTotalQuantityInInventory(mockMaterialsData[2])).toBe(7);
    });
  });

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

  describe("containsExpiredInventory fn", () => {
    it("returns true if the inventory contains expired units", () => {
      expect(containsExpiredInventory(mockMaterialsData[0])).toBe(false);
      expect(containsExpiredInventory(mockMaterialsData[1])).toBe(true);
      expect(containsExpiredInventory(mockMaterialsData[2])).toBe(false);
    });
  });

  describe("applyMaterialFilters fn", () => {
    it("returns filtered list with only materials that are low on inventory", () => {
      const filteredMaterials = applyMaterialFilters(mockMaterialsData, {
        expired: false,
        belowMinQuantity: true,
        category: { checked: false },
      });
      expect(filteredMaterials).toEqual([
        mockMaterialsData[2],
        mockMaterialsData[3],
      ]);
    });

    it("returns filtered list with only materials that have expired units in inventory", () => {
      const filteredMaterials = applyMaterialFilters(mockMaterialsData, {
        expired: true,
        belowMinQuantity: false,
        category: { checked: false },
      });
      expect(filteredMaterials).toEqual([
        mockMaterialsData[1],
        mockMaterialsData[3],
      ]);
    });

    it("returns filtered list with both materials with expired units and low in inventory", () => {
      const filteredMaterials = applyMaterialFilters(mockMaterialsData, {
        expired: true,
        belowMinQuantity: true,
        category: { checked: false },
      });
      expect(filteredMaterials).toEqual([mockMaterialsData[3]]);
    });

    it("returns filtered list with materials for insects", () => {
      const filteredMaterials = applyMaterialFilters(mockMaterialsData, {
        expired: false,
        belowMinQuantity: false,
        category: { checked: true, category: MaterialCategory.INSETO },
      });
      expect(filteredMaterials).toEqual([
        mockMaterialsData[1],
        mockMaterialsData[2],
        mockMaterialsData[3],
      ]);
    });

    it("returns filtered list with materials for insects with low inventory and expired units", () => {
      const filteredMaterials = applyMaterialFilters(mockMaterialsData, {
        expired: true,
        belowMinQuantity: true,
        category: { checked: true, category: MaterialCategory.INSETO },
      });
      expect(filteredMaterials).toEqual([mockMaterialsData[3]]);
    });

    it("returns original list when no filter is applied", () => {
      const filteredMaterials = applyMaterialFilters(mockMaterialsData, {
        expired: false,
        belowMinQuantity: false,
        category: { checked: false },
      });
      expect(filteredMaterials).toEqual(mockMaterialsData);
    });
  });
});
