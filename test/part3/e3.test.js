import { describe, expect, it } from "vitest";
import { getOliverSeatRowColumnNumber} from "../../exercises/part3/e3";
import { classSeats } from "../../data/data";

describe('getOliverSeatRowColumnNumber', () => {
  it('Should exist', () => {
    expect(getOliverSeatRowColumnNumber).toBeInstanceOf(Function);
  });
  it('Should return 4th row, 3rd column', () => {
    expect(getOliverSeatRowColumnNumber(classSeats)).toEqual([4, 3]);
  });
});
