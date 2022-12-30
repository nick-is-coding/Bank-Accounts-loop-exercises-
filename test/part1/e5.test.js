import { describe, expect, it } from "vitest";
import { getEvenNumbers } from "../../exercises/part1/e5";

describe('getEvenNumbers', () => {
  it('Should exist', () => {
    expect(getEvenNumbers).toBeInstanceOf(Function);
  });
  it('Should return an array with length of 25', () => {
    expect(getEvenNumbers().length).toEqual(25);
  });
  it('Should return an exact array of 25 even numbers', ()=> {
    expect(getEvenNumbers()).toEqual([
      2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
      22, 24, 26, 28, 30, 32, 34, 36, 38,
      40, 42, 44, 46, 48, 50
    ]);
  });
});
