function sumAllPrime(num) {
  //!creating a prime number
  let total = 0;
  function checkPrime(i) {
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      total += i;
    }
  }
  return total;
}

console.log(sumAllPrime(10));
