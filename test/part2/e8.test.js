import { describe, expect, it } from "vitest";
import { updateKevinsRecord } from "../../exercises/part2/e8";
import { bankAccounts } from "../../data/data";

describe('updateKevinsRecord', () => {
  it('Should exist', () => {
    expect(updateKevinsRecord).toBeInstanceOf(Function);
  });
  it('Should return an exact object of data', () => {
    expect(updateKevinsRecord(bankAccounts)).toEqual({
      id: 2,
      name: 'Kevin',
      balance: 1100,
      atmFills: [ 1100 ]
    });
  });
});
