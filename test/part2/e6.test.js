import { describe, expect, it } from "vitest";
import { getClientsWithLetterInName } from "../../exercises/part2/e6";
import { bankAccounts } from "../../data/data";

describe('getClientsWithLetterInName', () => {
  it('Should exist', () => {
    expect(getClientsWithLetterInName).toBeInstanceOf(Function);
  });
  it('Should return an array of 4 items', () => {
    expect(getClientsWithLetterInName(bankAccounts, 'a').length).toEqual(4);
  });
  it('Should return an exact array of string values', () => {
    expect(getClientsWithLetterInName(bankAccounts, 'a')).toEqual([ 'Susan', 'Morgan', 'Joshua', 'Candy' ]);
  });
});
