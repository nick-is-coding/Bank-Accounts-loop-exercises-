import { describe, expect, it } from "vitest";
import { makeStudentsSeatEmpty } from "../../exercises/part3/e4";
import { classSeats } from "../../data/data";

describe('makeStudentsSeatEmpty', () => {
  it('Should exist', () => {
    expect(makeStudentsSeatEmpty).toBeInstanceOf(Function);
  });
  it('Should return an array of two names ans an empty string', () => {
    expect(makeStudentsSeatEmpty(classSeats)).toEqual(['Ethan', 'Harper', '']);
  });
});
