import { describe, expect, it } from "vitest";
import { reverseArray } from '../exercises/e19';

describe('reverseArray', () => {
  it('Should exist', () => {
    expect(reverseArray).toBeInstanceOf(Function);
  });
  it('The length of the returned array must be equal to the length of the initial array.', () => {
    const initialArr = [1, 2, 3, 4];
    expect(reverseArray(initialArr).length).toEqual(initialArr.length);
  });
  it('Should return a reversed array value', () => {
    expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });
});
