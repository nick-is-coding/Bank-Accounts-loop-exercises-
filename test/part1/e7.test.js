import { describe, expect, it } from "vitest";
import { getSquareRoots } from "../../exercises/part1/e7";

describe('getSquareRoots', () => {
  it('Should exist', () => {
    expect(getSquareRoots).toBeInstanceOf(Function);
  });
  it('Should return an array with length of 8', () => {
    expect(getSquareRoots().length).toEqual(8);
  });
  it('Should return an exact array of 7 numbers', ()=> {
    expect(getSquareRoots()).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7 ]);
  });
});
