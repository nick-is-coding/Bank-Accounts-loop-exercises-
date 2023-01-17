import { describe, expect, it } from "vitest";
import { doesArrayInclude } from "../exercises/e17";

describe('isArrayIncludes', () => {
  const array = ['c', 'd', 'f', 'h', 'i', 'z', 'v']
  it('Should exist', () => {
    expect(doesArrayInclude).toBeInstanceOf(Function);
  });
  it('Should return true if a symbol is included', () => {
    expect(doesArrayInclude(array, 'v')).toEqual(true);
  });
  it('Should return false if a symbol is NOT included', () => {
    expect(doesArrayInclude(array, 't')).toEqual(false);
  });
});
