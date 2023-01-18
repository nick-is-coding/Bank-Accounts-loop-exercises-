
// EXERCISE 18
// Please, read the exercise-info/join.md to get the initial data of what is the expected result of this exercise.
// Array example: joinToStringData in /data/data.js
// joinToString(['a', 'b', 'c'], '-') => 'a-b-c'
// NOTE: You can NOT use the array.join(), array.toString(), and array.replace() methods in your code

export function joinToString(array, separator) {
  let string = "";
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1 || i === array.length - 2) {
          string += array[i];
        } else {
          string += array[i] + separator;
        }
    }
    return string;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
