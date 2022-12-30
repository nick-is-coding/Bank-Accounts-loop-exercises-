import { describe, expect, it } from "vitest";
import { getTotalTeamPayment } from "../../exercises/part1/e9";

describe('getTotalTeamPayment', () => {
  it('Should exist', () => {
    expect(getTotalTeamPayment).toBeInstanceOf(Function);
  });
  it('Should return a number value of 4387.5', () => {
    expect(getTotalTeamPayment()).toEqual(4387.5);
  });
});
