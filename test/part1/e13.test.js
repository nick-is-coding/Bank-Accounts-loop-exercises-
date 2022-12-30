import { describe, expect, it } from "vitest";
import { isNameOnTheList } from "../../exercises/part1/e13";

describe('isNameOnTheList', () => {
  it('Should exist', () => {
    expect(isNameOnTheList).toBeInstanceOf(Function);
  });
  it('Should return TRUE for the name that exists in the array', () => {
    expect(isNameOnTheList(['Kevin', 'Steven', 'Clark'], 'Steven')).toEqual(true);
  });
  it('Should return FALSE for the name that does not exist in the array', () => {
    expect(isNameOnTheList(['Kevin', 'Steven', 'Clark'], 'Jon')).toEqual(false);
  });
});
