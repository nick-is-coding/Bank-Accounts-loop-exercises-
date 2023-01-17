import { describe, expect, it } from "vitest";
import { getAverage } from "../exercises/e3";

describe('getAverage', () => {
  it('Should exist', () => {
    expect(getAverage).toBeInstanceOf(Function);
  });
  it('Should return a number value of 23 for the [20, 22, 24, 26] array passed', () => {
    expect(getAverage([20, 22, 24, 26])).toEqual(23);
  });
});
