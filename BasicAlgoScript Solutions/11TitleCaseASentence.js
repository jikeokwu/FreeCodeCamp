// Return the provided string with the first letter of each word capitalized.
//  Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  let wordsArray = str.split(" ");
  str = "";

  for (let i = 0; i < wordsArray.length; i++) {
    let n = wordsArray[i];

    let whole = n.toLowerCase().slice(1);
    let capital = n.toUpperCase()[0];

    str += capital + whole + " ";
  }

  return str.slice(0, -1);
}

titleCase("I'm a little tea pot");
