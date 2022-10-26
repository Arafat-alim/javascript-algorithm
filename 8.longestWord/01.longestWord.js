//! Longest Word in sentence
//! If my sentence is "Hello there, i am arafat" --> ["hello", "there"]
//! if my sentence is "Hello Man" --> Hello

function longestWord(sen) {
  //! remove the commas
  const strReg = sen.toLowerCase().match(/[a-z0-9]+/g);
  //! descending order
  const sorted = strReg.sort((a, b) => b.length - a.length);
  const muliple = sorted.filter((word) => word.length === sorted[0].length);
  if (muliple.length === 1) {
    console.log(muliple[0]);
  } else {
    console.log(muliple); //[ 'hello', 'there' ]
  }
}

console.log(longestWord("Hello,,,,,,,,,,, There i am  Alim"));
