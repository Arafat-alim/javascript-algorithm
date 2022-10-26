//! addAllNum

function addAllNum(...args) {
  //! 1st solutiion
  //   console.log(args); //[ 12, 3, 4, 4, 5, 5, 6, 6 ]
  //   return args.reduce((acc, curr) => acc + curr);
  //2nd solutio
  console.log(arguments);
}
console.log(addAllNum(12, 3, 4, 4, 5, 5, 6, 6)); //45
