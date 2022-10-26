function sortByHeight(arr) {
  let arr1 = []; //store the negtve element index
  let arr2 = []; //store the element values

  arr.forEach((item, index) => {
    if (item === -1) {
      arr1.push(index);
    } else {
      arr2.push(item);
    }
  });
  let sort = arr2.sort((a, b) => a - b);
  arr1.forEach((val, index) => sort.splice(arr1[index], 0, -1));
  return sort;
}

const input = [-1, 150, 190, 170, -1, -1, -1, 160, 160];

const op1 = sortByHeight(input);
console.log(op1); //[-1, 150, 160, 160, -1, -1, -1, 170, 190];
