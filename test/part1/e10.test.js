import { describe, expect, it } from "vitest";
import { getAverageAge } from "../../exercises/part1/e10";

describe('getAverageAge', () => {
  it('Should exist', () => {
    expect(getAverageAge).toBeInstanceOf(Function);
  });
  it('Should return a number value of 23 for the [20, 22, 24, 26] array passed', () => {
    expect(getAverageAge([20, 22, 24, 26])).toEqual(23);
  });
});
