// // Two numbers have an HCF of 15, and their product is 675. What are the numbers?

// function findNums(hcf,pro){
//     let table = [];
    
//     for(let i = hcf ; i<=pro; i+=hcf){
//         // console.log(i)
//         table.push(i)
//     }
    
//     for(let i =0; i < table.length-1; i++){
//         for(let j= i; j< table.length; j++){
//             if(table[i]*table[j]==pro){
//                 console.log(table[i],table[j])
//             }
//         }
//     }
    
    
// }

// findNums(15,675)


// function highestHcf(a, b) {
//     // Get the factors of both numbers
//     let mult1 = hcf(a); 
//     let mult2 = hcf(b); 
//     let hhcf = 1;

//     // Find the greatest common factor
//     for (let i = 1; i< mult1.length - 1; i++) {
//         if (mult2.includes(mult1[i])) {
//             hhcf = mult1[i];
//             break;
//         }
//     }

//     // Helper function to calculate all factors
//     function hcf(num) {
//         let arr = [];
//         for (let i = 1; i <= num; i++) { // Start from 1 to include all factors
//             if (num % i === 0) {
//                 arr.push(i);
//             }
//         }
//         return arr;
//     }
    
//     return hhcf;
// }

// // Example usage
// console.log(highestHcf(30,15)); // Outputs: 2


// console.log('1');

// setTimeout(() => {
//     console.log('2');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('3');
//     return Promise.resolve();
// }).then(() => {
//     console.log('4');
// });

// console.log('5');

////////////////

// console.log(1);
//   function promise(){
//       return new Promise((res)=>{
//           setTimeout(()=>{
//               res('resolved in 1s')
//           })
//       },1000)
//   }
//   console.log(2)
//   promise().then((res)=>console.log(res)).catch((err)=>console.log(err))
//  console.log(3);

// // /////////

// console.log(1);
  
//   async function abc(){
//       return await new Promise((res)=>{
//           setTimeout(()=>{
//               res(2)
//           },0)
          
//       })
//   }
  
//   async function newFn(){
// const result = await abc();
//     console.log(result);
//   }
//   newFn()
// //   let result = 
// console.log(3);


/////////
// console.log(1);

// async function abc() {
//     return await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(2);
            
//         }, 0);
//         console.log('heyyy');
//     });
// }

// async function newFn() {
//     const result = await abc();
//     console.log(result);
//     console.log(3);

// }

// newFn();

////////////
// const p1 = Promise.resolve("A");
// const p2 = new Promise((res) => setTimeout(() => res("B"), 2000));
// const p3 = Promise.resolve("C");

// Promise.all([p1, p2, p3]).then(console.log);
// // ✅ Output after 2s: ["A", "B", "C"]


// //////
console.log('start');
setTimeout(() => {
    console.log('setTimeout');
}, 0);
setImmediate(() => {
    console.log('setImmediate');
});
process.nextTick(() => {
    console.log('process.nextTick');
});
Promise.resolve().then(() => {
    console.log('Promise');
});
queueMicrotask(() => {
    console.log('queueMicrotask');
});

























