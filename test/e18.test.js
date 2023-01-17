import { describe, expect, it } from "vitest";
import { joinToString } from "../exercises/e18";
import { joinToStringData } from "../data/data";

describe('isArrayIncludes', () => {
  it('Should exist', () => {
    expect(joinToString).toBeInstanceOf(Function);
  });
  it('Should return a correct string with symbols between array items values only', () => {
    expect(joinToString(joinToStringData, ' ')).toEqual('Devslopes is teaching me FOR loops and functions!');
  });
});
