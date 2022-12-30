import { describe, expect, it } from "vitest";
import { findMinValueInArray } from "../../exercises/part1/e11";

describe('findMinValueInArray', () => {
  it('Should exist', () => {
    expect(findMinValueInArray).toBeInstanceOf(Function);
  });
  it('Should return a number value of 19 for the [20, 24, 19, 26] array passed', () => {
    expect(findMinValueInArray([20, 24, 19, 26])).toEqual(19);
  });
});
