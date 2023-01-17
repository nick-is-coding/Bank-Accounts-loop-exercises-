import { describe, expect, it } from "vitest";
import { getClientsWithLetterInName } from "../exercises/e10";
import { bankAccounts } from "../data/data";

describe('getClientsWithLetterInName', () => {
  it('Should exist', () => {
    expect(getClientsWithLetterInName).toBeInstanceOf(Function);
  });
  it('Should return an array of 4 items', () => {
    expect(getClientsWithLetterInName(bankAccounts, 'a').length).toEqual(4);
  });
  it('Should return an exact array of 4 string values when \'a\' was passed', () => {
    expect(getClientsWithLetterInName(bankAccounts, 'a')).toEqual([ 'Susan', 'Morgan', 'Joshua', 'Candy' ]);
  });
  it('Should return an exact array of 1 string value when \'c\' was passed', () => {
    expect(getClientsWithLetterInName(bankAccounts, 'c')).toEqual([ 'Candy' ]);
  });
});
