// Promise.reject("err")
//   .catch((e) => {
//     console.log("Caught:", e);
//     throw "again";
//   })
//   .catch((e) => {
//     console.log("Caught again:", e);
//   });


// //

// Promise.resolve("work")
//   .finally(() => {
//     console.log("Cleaning up");
//   })
//   .then(console.log);
// //

// function fn() {
//     await Promise.resolve(123);
//     console.log("This won't run");
//   }
//   fn();
// ///


// async function foo() {
//     console.log("Inside");
//   }
//   foo().then(console.log);

//   ///////////

//   async function foo() {
//     console.log("Inside");
//   }
//   foo().then(console.log);
// //////////

// async function foo() {
//     console.log("Inside");
//   }
//   foo().then(console.log);

//   ////////////////

//   new Promise(async (resolve, reject) => {
//     console.log("1");
//     await null;
//     console.log("2");
//     resolve();
//   }).then(() => console.log("3"));
//   console.log("4");

//   ///////////////

//   function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function run() {
//     console.log("Start");
//     await delay(0);
//     console.log("After delay");
//   }
//   run();
//   console.log("End");
// ///////////////

// Promise.reject("Oops");

// setTimeout(() => {
//   console.log("Timeout finished");
// }, 0);

// /////////////

// setTimeout(() => {
//     console.log("1");
//     Promise.resolve().then(() => console.log("2"));
//   }, 0);
  
//   Promise.resolve().then(() => console.log("3"));
//   console.log("4");
// ////////////


// async function bar() {
//     try {
//       await Promise.reject("fail");
//     } catch (e) {
//       return "caught";
//     }
//   }
//   bar().then(console.log);
// //////////


// async function foo() {
//     return await Promise.resolve(42);
//   }
//   foo().then(console.log);

//   //////////////////


//   setTimeout(() => {
//     console.log("setTimeout");
//   }, 0);
  
//   queueMicrotask(() => {
//     console.log("microtask 1");
//   });
  
//   Promise.resolve().then(() => {
//     console.log("promise 1");
//   }).then(() => {
//     console.log("promise 2");
//   });
  
//   queueMicrotask(() => {
//     console.log("microtask 2");
//   });

//   ///////////////

//   Promise.resolve()
//   .then(() => console.log("A"))
//   .then(() => console.log("B"))
//   .then(() => console.log("C"));

// Promise.resolve().then(() => console.log("X"));

// //////////////

// Promise.reject("Boom")
//   .then(() => console.log("Then!"));

//   /////////////

//   async function f() {
//     return "Hello";
//   }
//   console.log(f());

//   //////////////

//   Promise.resolve()
//   .then(() => {
//     console.log("First");
//     return (async () => {
//       console.log("Inside async");
//       return "Done";
//     })();
//   })
//   .then((res) => console.log("After:", res));


//   ////////////////

//   async function test() {
//     const res = await 42;
//     console.log(res);
//   }
//   test();
  

//   Promise.resolve()
//   .then(() => {
//     console.log("1");
//     return Promise.resolve('2');
//   })
//   .then((res) => console.log(res));

// Promise.resolve().then(() => console.log("3"));

// Promise.resolve()
//   .then(() => {
//     console.log("4");
//   })
//   .then(() => {
//     console.log("5");
//     return Promise.resolve();
//   })
//   .then(() => console.log("6"));