import { describe, expect, it } from "vitest";
import { getClientWithWrongBalance } from "../../exercises/part2/e10";
import { bankAccounts } from "../../data/data";

describe('getClientWithWrongBalance', () => {
  it('Should exist', () => {
    expect(getClientWithWrongBalance).toBeInstanceOf(Function);
  });
  it('Should return an array of 2 items', () => {
    expect(getClientWithWrongBalance(bankAccounts).length).toEqual(2);
  });
  it('Should return an exact array of string values', () => {
    expect(getClientWithWrongBalance(bankAccounts)).toEqual([ 'Joshua', -100 ]);
  });
});
