// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;

  for (let i = 1; i < arr.length; i++) {
    func(arr[i]) ? (num = arr[i]) : (num = undefined);
    if (func(arr[i])) {
      break;
    }
  }

  return num;
}

findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0);
