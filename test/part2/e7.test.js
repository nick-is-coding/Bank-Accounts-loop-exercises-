import { describe, expect, it } from "vitest";
import { getPhilsNewBalance } from "../../exercises/part2/e7";
import { bankAccounts } from "../../data/data";

describe('getPhilsNewBalance', () => {
  it('Should exist', () => {
    expect(getPhilsNewBalance).toBeInstanceOf(Function);
  });
  it('Should return an exact number value', () => {
    expect(getPhilsNewBalance(bankAccounts)).toEqual(118);
  });
});
