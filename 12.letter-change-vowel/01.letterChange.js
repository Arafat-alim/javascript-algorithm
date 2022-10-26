//! Letter change
//! task 1 --> change the letter like Hello There --> Ifmmp uhfsf, if found z --> a
//! task 2 --> found any vowel then convert it into Caps

function changeLetter(str) {
  let newStr = str.replace(/[a-z]/gi, (char) => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  newStr = newStr.replace(/a|e|i|o|u/gi, (char) => char.toUpperCase());
  return newStr;
}

console.log(changeLetter("Hello Therezz")); // Ifmmp UIfsfAA
