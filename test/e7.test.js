import { describe, expect, it } from "vitest";
import { getClientWithLeastBalance } from "../exercises/e7";
import { bankAccounts } from "../data/data";

describe('getClientWithLeastBalance', () => {
  it('Should exist', () => {
    expect(getClientWithLeastBalance).toBeInstanceOf(Function);
  });
  it('Should return an array of 1 item (object)', () => {
    expect(getClientWithLeastBalance(bankAccounts).length).toEqual(1);
  });
  it('Should return an exact string value', () => {
    expect(getClientWithLeastBalance(bankAccounts)).toEqual([
      {
        id: 5,
        name: 'Phil',
        balance: 18,
        deposits: [ 100, 18 ],
        withdrawals: [ 100 ]
      }
    ]);
  });
});
