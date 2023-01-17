import { describe, expect, it } from "vitest";
import { getAllDepositsGreaterThanOneHundred } from "../exercises/e12";
import { bankAccounts } from "../data/data";

describe('getAllDepositsGreaterThanOneHundred', () => {
  it('Should exist', () => {
    expect(getAllDepositsGreaterThanOneHundred).toBeInstanceOf(Function);
  });
  it('Should return an array of 8 items', () => {
    expect(getAllDepositsGreaterThanOneHundred(bankAccounts).length).toEqual(8);
  });
  it('Should return an exact array of number values for bank accounts', () => {
    expect(getAllDepositsGreaterThanOneHundred(bankAccounts)).toEqual([ 150, 221, 1100, 4000, 5000, 6000, 9200, 256.57 ]);
  });
});
