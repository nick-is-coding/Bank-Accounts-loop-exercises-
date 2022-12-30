import { describe, expect, it } from "vitest";
import { getNamesByCharacter } from "../../exercises/part1/e14";

describe('getNamesByCharacter', () => {
  it('Should exist', () => {
    expect(getNamesByCharacter).toBeInstanceOf(Function);
  });
  it('Should return an array with length of 4', () => {
    expect(getNamesByCharacter(['Kevin', 'Steven', 'Clark'], 'a').length).toEqual(1);
  });
  it('Should return an exact array of 4 numbers', ()=> {
    expect(getNamesByCharacter(['Kevin', 'Steven', 'Clark'], 'e')).toEqual(['Kevin', 'Steven']);
  });
});
