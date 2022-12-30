import { describe, expect, it } from "vitest";
import { findMaxValueInArray } from "../../exercises/part1/e12";

describe('findMaxValueInArray', () => {
  it('Should exist', () => {
    expect(findMaxValueInArray).toBeInstanceOf(Function);
  });
  it('Should return a number value of 19 for the [20, 24, 19, 26] array passed', () => {
    expect(findMaxValueInArray([20, 24, 19, 26])).toEqual(26);
  });
});
