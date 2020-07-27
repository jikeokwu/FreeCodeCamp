// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  let cleanValues = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      cleanValues.push(arr[i]);
    }
  }

  return cleanValues;
}

bouncer([7, "ate", "", false, 9]);

//This works because if (n) always returns true except for those values that we are testing against. Even if negative or an object.
