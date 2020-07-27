// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let primaryArr = [];
  let secondaryArr = [];

  for (let i = 0; i < arr.length; i++) {
    secondaryArr.push(arr[i]);

    if (secondaryArr.length == size) {
      primaryArr.push(secondaryArr);
      secondaryArr = [];
    }

    if (i == arr.length - 1 && secondaryArr.length !== 0) {
      primaryArr.push(secondaryArr);
    }
  }

  return primaryArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
