import { describe, expect, it } from "vitest";
import { getOddNumbers } from "../../exercises/part1/e6";

describe('getOddNumbers', () => {
  it('Should exist', () => {
    expect(getOddNumbers).toBeInstanceOf(Function);
  });
  it('Should return an array with length of 25', () => {
    expect(getOddNumbers().length).toEqual(25);
  });
  it('Should return an exact array of 25 odd numbers', ()=> {
    expect(getOddNumbers()).toEqual([
      1, 3, 5, 7, 9, 11, 13, 15, 17, 19,
      21, 23, 25, 27, 29, 31, 33, 35, 37,
      39, 41, 43, 45, 47, 49
    ]);
  });
});
