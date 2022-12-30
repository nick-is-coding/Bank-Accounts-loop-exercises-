import { describe, expect, it } from "vitest";
import { getNumbersSumInAHundred } from "../../exercises/part1/e4";

describe('getNumbersNumberInRange', () => {
  it('Should exist', () => {
    expect(getNumbersSumInAHundred).toBeInstanceOf(Function);
  });
  it('Should return a value of 735', () => {
    expect(getNumbersSumInAHundred()).toEqual(735);
  });
});
