//! Anagram

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

//helper function
function formatStr(str) {
  return str
    .replace(/[^\w]/g, "") // number and alphabets are allowed
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

console.log(isAnagram("elbow", "below"));
console.log(
  isAnagram(
    "Dormitory",
    "dirty room######################???????????233432432432"
  )
);
