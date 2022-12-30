import { describe, expect, it } from "vitest";
import { isKevinInClass } from "../../exercises/part3/e1";
import { classSeats } from "../../data/data";

describe('isKevinInClass', () => {
  it('Should exist', () => {
    expect(isKevinInClass).toBeInstanceOf(Function);
  });
  it('Should return false', () => {
    expect(isKevinInClass(classSeats)).toEqual(false);
  });
});
