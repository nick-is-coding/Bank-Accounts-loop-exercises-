import { describe, expect, it } from "vitest";
import { getClientWithLowBalance } from "../../exercises/part2/e3";
import { bankAccounts } from "../../data/data";

describe('getClientWithLowBalance', () => {
  it('Should exist', () => {
    expect(getClientWithLowBalance).toBeInstanceOf(Function);
  });
  it('Should return an exact string value', () => {
    expect(getClientWithLowBalance(bankAccounts)).toEqual('Phil');
  });
});
