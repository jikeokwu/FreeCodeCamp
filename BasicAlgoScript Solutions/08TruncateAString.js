// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  let primary = str.length;
  let secondary = num;

  return secondary >= primary ? str.slice(0, num) : str.slice(0, num) + "...";
}

truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length
);

//used a ternary statement to know whether a string is truncated or not
