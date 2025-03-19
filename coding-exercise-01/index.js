// Exercise: Array Methods

// Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.

// In the newly returned array, every object must have a val key and the input array's number as a value.

// For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

// Derive a new array, based on existing array, where every element was transformed to an object.

// This topic is covered in Lecture 0: Refreshing Array Methods

// Implementation 1

function transformToObjects(numberArray) {
  // Use map to transform each number into an object with a 'val' key
  return numberArray.map(function (number) {
    return { val: number };
  });
}

// Implementation 2 with an arrow function

function transformToObjects(numberArray) {
  return numberArray.map((number) => ({ val: number }));
}
