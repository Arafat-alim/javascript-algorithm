//! For in loop helps us to iterate an object

let obj = {
  x: 1,
  t: 2,
  y: 45,
};

for (let key in obj) {
  console.log(key); // keys = x,t,y
  console.log(obj[key]); // 1,2,45
}
