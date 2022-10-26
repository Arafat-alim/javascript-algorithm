//! Replace String

function replaceString(oldStr, newStr, fullStr) {
  return fullStr.split(oldStr).join(newStr);
}

const output = replaceString("Web", "World", "Duni Wide Web");
console.log(output);
