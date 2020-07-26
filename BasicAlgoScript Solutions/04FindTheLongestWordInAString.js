// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
  let words = str.split(" ");
  let longest = 0;

  for (let i = 0; i < words.length; i++) {
    let length = words[i].length;
    if (length > longest) {
      longest = length;
    }
  }

  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
