import { describe, expect, it } from "vitest";
import { getClientsWithBalanceOverOneHundred } from "../../exercises/part2/e5";
import { bankAccounts } from "../../data/data";

describe('getClientsWithBalanceOverOneHundred', () => {
  it('Should exist', () => {
    expect(getClientsWithBalanceOverOneHundred).toBeInstanceOf(Function);
  });
  it('Should return an array of 3 items', () => {
    expect(getClientsWithBalanceOverOneHundred(bankAccounts).length).toEqual(3);
  });
  it('Should return an exact array of objects with client\'s data', () => {
    expect(getClientsWithBalanceOverOneHundred(bankAccounts)).toEqual([
      { name: 'Susan', balance: 100.32 },
      { name: 'Morgan', balance: 1100 },
      { name: 'Joshua', balance: 18456.57 }
    ]);
  });
});
