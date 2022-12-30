import { describe, expect, it } from "vitest";
import { getTotalDebtValue } from "../../exercises/part1/e8";

describe('getTotalDebtValue', () => {
  it('Should exist', () => {
    expect(getTotalDebtValue).toBeInstanceOf(Function);
  });
  it('Should return an array with length of 4', () => {
    expect(getTotalDebtValue().length).toEqual(4);
  });
  it('Should return an exact array of 4 numbers', ()=> {
    expect(getTotalDebtValue()).toEqual([ 1150, 1250, 1450, 1600 ]);
  });
});
