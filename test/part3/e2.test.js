import {describe, expect, it} from "vitest";
import { getStudentClassPlacement } from "../../exercises/part3/e2";
import { classSeats } from "../../data/data";

describe('getStudentClassPlacement', () => {
  it('Should exist', () => {
    expect(getStudentClassPlacement).toBeInstanceOf(Function);
  });
  it('Should return center for Emma', () => {
    expect(getStudentClassPlacement(classSeats,'Emma')).toEqual('center');
  });
  it('Should return right for Oliver', () => {
    expect(getStudentClassPlacement(classSeats, 'Oliver')).toEqual('right');
  });
  it('Should return false for Kevin', () => {
    expect(getStudentClassPlacement(classSeats, 'Kevin')).toEqual(false);
  });
});
