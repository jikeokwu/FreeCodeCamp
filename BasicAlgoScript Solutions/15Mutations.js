function mutation(arr) {
  let primary = arr[0].toLowerCase().split("");
  let secondary = arr[1].toLowerCase().split("");

  let ternary;

  for (let n = 0; n < secondary.length; n++) {
    ternary = primary.includes(secondary[n]);
    if (ternary) {
    } else {
      break;
    }
  }

  return ternary;
}

mutation(["hello", "Hello"]);
