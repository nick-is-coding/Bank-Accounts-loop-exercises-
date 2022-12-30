import { describe, expect, it } from "vitest";
import { replaceTwoStudents } from "../../exercises/part3/e5";
import { classSeats } from "../../data/data";


describe('replaceTwoStudents', () => {
  it('Should exist', () => {
    expect(replaceTwoStudents).toBeInstanceOf(Function);
  });
  it('Should return an array of two names ans an empty string', () => {
    expect(replaceTwoStudents(classSeats)).toEqual([ [ 'Liam', 2, 3 ], [ 'James', 4, 1 ] ]);
  });
});
