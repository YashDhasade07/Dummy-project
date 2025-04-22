// async function noAwait() {
//   console.log('Inside async function');
// }

// console.log(typeof noAwait)

/////////////

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another Success'),
// ])
//   .then((values) => console.log(values))
//   .catch((error) => console.log('Caught:', error));
// ///////////////////


// async function fetchData() {
//   const data1 = await Promise.resolve('Data 1');
//   const data2 = await Promise.resolve('Data 2');
//   return [data1, data2];
// }

// fetchData().then((data) => console.log(data));
// // ///////

// Promise.resolve(1)
//   .then((x) => x + 1)
//   .then((x) => {
//     return new Promise((resolve) => setTimeout(() => resolve(x + 1), 1000));
//   })
//   .then((x) => console.log(x));

// /////////////////////////

// async function asyncFunc() {
//   throw new Error('Error occurred');
// }

// async function main() {
//   try {
//     await asyncFunc();
//   } catch (error) {
//     console.log('Caught:', error.message);
//   }
// }

// main();


////////////////////////////

// new Promise((resolve,reject) => {
//   reject(Promise.resolve('Nested'));
// }).then((value) => console.log(value))
// .catch((value) => console.log(value));

//////////////
// console.log(  "hii" ,{value:3,acd: 34})


/////////////////
// {
//   function hii(){
//         console.log('hii')
//     }
// }
// hii()


//////////////////////////

// setTimeout(console.log,1000,1)
// setTimeout(console.log,500,3)


///////////////////\
// const tasks = [10,100, 50, 10];
// async function serial() {
//   for (let t of tasks) {
//     console.log(await new Promise(r => setTimeout(() => r(t), t)));
//   }
//   console.log("Serial Done");
// }
// async function parallel() {
//   await Promise.all(tasks.map(async t => {
//     console.log(await new Promise(r => setTimeout(() => r(t), t)));
//   }));
//   console.log("Parallel Done");
// }
// // serial().then(parallel);

// console.log(tasks.map(async t => {
//     console.log(await new Promise(r => setTimeout(() => r(t), t)));
//   }))

//////////////////
// Promise.resolve(1)
//   .then((res) => {
//     console.log(res);
//     throw new Error("fail");
//   })
//   .catch((err) => {
//     console.log("Caught:", err.message);
//     return "Recovered";
//   })
//   .then((res) => {
//     console.log("Final:", res);
//   });

//////////////////////////
// setTimeout(() => console.log("setTimeout"));

// Promise.resolve().then(() => {
//   console.log("Promise1");
//   return Promise.resolve("Promise2");
// }).then(console.log);

// queueMicrotask(() => {
//   console.log("Microtask");
// });
//////////////////////

// Promise.resolve()
//   .then(() => {
//     console.log("A");
//     return Promise.resolve("B");
//   })
//   .then((val) => {
//     console.log(val);
//     return new Promise((resolve) => {
//       setTimeout(() => resolve("C"), 0);
//     });
//   })
//   .then(console.log);
// console.log("D");

//////////////////////////
// async function fn() {
//   return 5;
// }
// fn().then(console.log);

// (async () => {
//   const result = await fn();
//   console.log("Awaited:", result);
// })();

////////////////

// Promise.resolve()
//   .then(() => {
//     console.log("A");
//     return;
//   })
//   .then((res) => {
//     console.log("B", res);
//   });

///////////////
// const p = new Promise((resolve, reject) => {
//   console.log("Inside");
//   resolve("Done");
// });


/////////////
// const p = new Promise((resolve, reject) => {
//   console.log("Inside");
//   resolve("Done");
// });
// p.then(console.log);
// console.log("Outside");

///////////
// Promise.reject("Fail")
//   .catch((e) => {
//     console.log("Caught once");
//     throw e;
//   })
//   .catch(() => {
//     console.log("Caught again");
//   });

//////////
// async function outer() {
//     console.log("1");
//     await inner();
//     console.log("3");
//   }
//   async function inner() {
//     console.log("2");
//   }
  
//   outer();
//   console.log("4");
  
  ///
  Promise.resolve()
  .then(() => {
    console.log("1");
    return Promise.resolve('2');
  })
  .then((res) => console.log(res));

Promise.resolve().then(() => console.log("3"));

Promise.resolve()
  .then(() => {
    console.log("4");
  })
  .then(() => {
    console.log("5");
    return Promise.resolve();
  })
  .then(() => console.log("6"));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  