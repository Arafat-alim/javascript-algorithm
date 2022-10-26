//! We can follow the previous 6 steps over here to build isPalindrome
function isPalindrome(str) {
  const revStr = str.split("").reverse().join("");
  return revStr === str;
}
const input1 = "madam";
const input2 = "hello";
const output1 = isPalindrome(input1);
const output2 = isPalindrome(input2);
console.log(output1); //true
console.log(output2); //false
