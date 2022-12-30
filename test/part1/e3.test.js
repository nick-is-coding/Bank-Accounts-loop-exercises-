import { describe, expect, it } from "vitest";
import { getNumbersNumberInRange } from "../../exercises/part1/e3";

describe('getNumbersNumberInRange', () => {
  it('Should exist', () => {
    expect(getNumbersNumberInRange).toBeInstanceOf(Function);
  });
  it('Should return value of 6 for 20..25 range', () => {
    expect(getNumbersNumberInRange(20, 25)).toEqual(6);
  });
});
