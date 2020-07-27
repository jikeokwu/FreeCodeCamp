// Return an array consisting of the largest number from each provided sub-array.
//  For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  let arrayOfLargest = [];

  for (let i = 0; i < arr.length; i++) {
    let primaryArr = arr[i];
    let largest = arr[i][i];

    for (let n = 0; n < 4; n++) {
      let secondaryArr = primaryArr[n];

      if (secondaryArr > largest) {
        largest = secondaryArr;
      }
    }

    arrayOfLargest.push(largest);
  }

  return arrayOfLargest;
}

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);

//Initially, I had an issue dealing with negatives with the orginal algorithim I went for. This is because I initialized the variable
//largest as 0. By channging it to be the first value in the secondary array, I got arround this problem.
