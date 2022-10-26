//! captialize letter

const input = "i love javascript";

function captializeLetter(str) {
  //! 1st way
  // return str
  //   .toLowerCase()
  //   .split(" ")
  //   .map((item) => item[0].toUpperCase() + item.slice(1))
  //   .join(" ");

  //! 2nd way
  //return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());

  //! 3rd way
  const strArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(" ");
}

console.log(captializeLetter(input)); // I Love Javascript

//! \b back boundary
