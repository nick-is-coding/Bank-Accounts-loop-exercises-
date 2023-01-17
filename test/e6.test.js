import { describe, expect, it } from "vitest";
import { getClientWithNoMoney } from "../exercises/e6";
import { bankAccounts } from "../data/data";

describe('getClientWithNoMoney', () => {
  it('Should exist', () => {
    expect(getClientWithNoMoney).toBeInstanceOf(Function);
  });
  it('Should return an exact string value', () => {
    expect(getClientWithNoMoney(bankAccounts)).toEqual(['Candy']);
  });
});
