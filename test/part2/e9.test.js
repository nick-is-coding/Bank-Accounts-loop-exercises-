import { describe, expect, it } from "vitest";
import { getAllWithdrawals } from "../../exercises/part2/e9";
import { bankAccounts } from "../../data/data";

describe('getAllWithdrawals', () => {
  it('Should exist', () => {
    expect(getAllWithdrawals).toBeInstanceOf(Function);
  });
  it('Should return an array of 5 items', () => {
    expect(getAllWithdrawals(bankAccounts).length).toEqual(5);
  });
  it('Should return an exact array of string values', () => {
    expect(getAllWithdrawals(bankAccounts)).toEqual([ 300.68, 0, 5900, 0, 100 ]);
  });
});
