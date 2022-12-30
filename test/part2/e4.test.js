import { describe, expect, it } from "vitest";
import { getClientWithGreatestBalance } from "../../exercises/part2/e4";
import { bankAccounts } from "../../data/data";

describe('getClientWithGreatestBalance', () => {
  it('Should exist', () => {
    expect(getClientWithGreatestBalance).toBeInstanceOf(Function);
  });
  it('Should return an exact string value', () => {
    expect(getClientWithGreatestBalance(bankAccounts)).toEqual('Joshua');
  });
});
