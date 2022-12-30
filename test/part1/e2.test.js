import { describe, expect, it } from "vitest";
import { getNumbersList } from "../../exercises/part1/e2";

describe('getNumbersList', () => {
  it('Should exist', () => {
    expect(getNumbersList).toBeInstanceOf(Function);
  });
  it('Should return an array with length of 5 when 5 was passed', () => {
    expect(getNumbersList(5).length).toEqual(5);
  });
  it('Should return an exact array of 6 numbers when 6 was passed', ()=> {
    expect(getNumbersList(6)).toEqual([1,2,3,4,5,6]);
  });
});
