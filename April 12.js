// console.log("Start of script");

// // Using setTimeout (executes after the timer expires)
// setTimeout(() => {
//   console.log("Executed setTimeout");
// }, 0);
// // Using setImmediate (executes in the "check" phase, after I/O events)
// setImmediate(() => {
//   console.log("Executed setImmediate");
// });
// // console.log("End of script");

// Promise.resolve('promise is resolved')
//   .then((res) => {
//     console.log(res);
//     return res;
//     // throw new Error("Oops!");
//   })
//   .then((res) => {
//     console.log(res);
//     throw new Error(res);
//   })
//   .catch((err) => {
//     console.log(err);
//     return err;
//   })
//   .then((res) => {
//     console.log(res);
//   })

// let obj ={a:1,B:2,c:3};

// // for(let val of obj){
// // }
// obj.forEach((val)=> console.log((val)))
//     // console.log(Object.values(obj))

//     if(true){
//         console.log(Object.values(obj))
//     }else{
//         console.log(Object.values(obj))
//     }finally{
//         console.log(Object.values(obj))
//     }

// console.log("Start of script");

// // Using setTimeout (executes after the timer expires)
// setTimeout(() => {
//   console.log("Executed setTimeout");
// }, 0);
// // Using setImmediate (executes in the "check" phase, after I/O events)
// setImmediate(() => {
//   console.log("Executed setImmediate");
// });

// // // Using process.nextTick (executes in the next phase before I/O events)
// // process.nextTick(() => {
// //   console.log("Executed process.nextTick");
// // });

// // // Using queueMicrotask (executes in the microtask queue like Promises)
// // queueMicrotask(() => {
// //   console.log("Executed queueMicrotask");
// // });

// console.log("End of script");

// console.log(this)

// console.log("Start");

// Promise.resolve('promise is resolved')
//   .then((res) => {
//     console.log(res);
//     return res;
//     // throw new Error("Oops!");
//   })
//   .then((res) => {
//     console.log(res);
//     throw new Error(res);
//   })
//   .catch((err) => {
//     console.log(err);
//     return err;
//   })
//   .then((res) => {
//     console.log(res);
//   })
//////
//   .catch((err) => {
//     console.log("Catch 2", err);
//   });

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// console.log("End");

// console.log("Try programiz.pro");

// let a = 10;
// if( a = 1){
//     console.log('abc')
// }else{
//     console.log('abc')
// }
// console.log(a=3)

let arr = [1, 2, 3];

// for(let val of arr){
//     console.log(val);
//     val = 10
// };
// console.log(arr)

// arr.forEach((var a = 0,i)=>{
//     console.log(i)
// })

// console.log(a)

// function abc (a,b){
//     this.a = a;
//     this.b = b
// }

// let def = new abc('s','ss')
// console.log(def)

// for(var i =0; i<3 ; i++){
//     // i =0;
//     setTimeout((i)=>{
//         console.log(i)
//     },100,i)
// }

let str = "promise is resolved";

Promise.resolve(str)
    .then((a)=>{ console.log(a)
        return a
    }).then((a)=>{ 
        console.log(a);
        throw new Error(a)
    }).catch((err)=>{
        console.log(err);
        return err
    }).then((a)=>{ 
        console.log(a);
    })
