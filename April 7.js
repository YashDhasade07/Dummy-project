// let funcs = [];

// for (let i = 0; i < 3; i++) {
//   funcs[i] = function() {
//     return i;
//   };
// }

// console.log(funcs[0]()); // ?
// console.log(funcs[1]()); // ?
// console.log(funcs[2]()); // ?
//

///////////////////////
// let x = "hello";
// // x[0] = "H";  // no effect
// console.log(x); // still "hello"

// console.log(typeof null);

//////////////
// let value = 14

// let abc ={
//     a: 3,
//     value : 13,
//  obj : {
//   value: 10,
//   getValue: () => this.value,
// }
// }
// console.log(abc.obj.getValue()); // ?



function go() {
    let a =42
  try {
    return a;
  } finally {
    // return 99;
    console.log(0)
  }
}

console.log(go()); // ?