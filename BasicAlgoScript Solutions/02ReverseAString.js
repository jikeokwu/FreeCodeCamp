// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
  let reverseStr = "";
  let reverseArray = [];

  for (let i = 0; i < str.length; i++) {
    let array = str.split("");
    reverseArray.unshift(array[i]);
  }

  for (let i = 0; i < str.length; i++) {
    reverseStr += reverseArray[i];
  }
  return reverseStr;
}

reverseString("hello");
