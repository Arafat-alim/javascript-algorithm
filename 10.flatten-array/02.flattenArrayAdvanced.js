//! Advanced Flatten array technique
function flattenArrayAdvanced(acc) {
  return acc.reduce((acc, curr) => {
    return Array.isArray(curr)
      ? [...acc, ...flattenArrayAdvanced(curr)]
      : [...acc, curr];
  }, []);
}

const output1 = flattenArrayAdvanced([[1, 2, 3, 4], 45, 75]);
const output2 = flattenArrayAdvanced([
  1,
  2,
  [3, 4, [5, 6], 7],
  8,
  [9, 10],
  [11, 12, [13, 14]],
]);

console.log(output1);
console.log(output2);
