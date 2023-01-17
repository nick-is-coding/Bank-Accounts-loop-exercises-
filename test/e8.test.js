import { describe, expect, it } from "vitest";
import { getClientWithGreatestBalance } from "../exercises/e8";
import { bankAccounts } from "../data/data";

describe('getClientWithGreatestBalance', () => {
  it('Should exist', () => {
    expect(getClientWithGreatestBalance).toBeInstanceOf(Function);
  });
  it('Should return an array of 1 item (object)', () => {
    expect(getClientWithGreatestBalance(bankAccounts).length).toEqual(1);
  });
  it('Should return an exact string value', () => {
    expect(getClientWithGreatestBalance(bankAccounts)).toEqual([
      {
        id: 3,
        name: 'Joshua',
        balance: 18456.57,
        deposits: [ 4000, 5000, 6000, 9200, 256.57 ],
        withdrawals: [ 1500, 1400, 1500, 1500 ]
      }
    ]);
  });
});
