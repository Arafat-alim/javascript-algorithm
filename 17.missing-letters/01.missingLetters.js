function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split("").map((char, index) => {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });
  return missing;
}

const input = "abce";
const op = missingLetters(input);
console.log(op); //d
