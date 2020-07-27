// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  let word = "";
  for (let i = 1; i <= num; i++) {
    word += str;
  }
  return word;
}

repeatStringNumTimes("abc", 3);
