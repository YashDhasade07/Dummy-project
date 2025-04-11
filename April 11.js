// April 11
// let str = "hello";
// str[0] = "H";
// console.log(str); // ?
    
    
//     const obj = {
//   value: 10,
//   getValue: () => this.value,
// };
// console.log(obj.getValue); // ?

/////////////
// console.log(x)

// x=11


// /////////
// function divide(a, b) {
//   if (b === 0) {
//     throw  Error("Cannot divide by zero");
//   }
//   return a / b;
// }
// divide(3,0)

////////
// function foo() {
//   console.log(this);
// }
// foo();

/////////////
// console.log('A' - 'B' + 2
// ////////////

// let a = {};
// let b = a;
//  a= []
// console.log(b);

/////////////
// if(true){
    
// async function getData() {
//   return "Data fetched";
// }

// const result = await getData();
// console.log(result);
// }

// console.log('-123'.length)

////////////////
// try {
//   a = 3;
//   let a = 4
// } catch (e) {
//   console.log(e.name);    // ?
//   console.log(e.message); // ?
// }

// ///////////
// function risky() {
//   throw {};
// }

// try {
//   risky();
// } catch (e) {
//   console.log(typeof e); // ?
// }

///////
// function go() {
//   try {
//     return 42;
//   } finally {
// console.log("hii"); // ?
//     return 99;
//   }
// }

// console.log(go()); // ?

///////////
// let arr ={1:1,2:2,3:3,4:4};
// let arr =new Set([1,2,3,4])

// console.log(arr.has(9))

///////////////
// Find the Longest Word in a Sentence
// let str = 'Find the Longest Word in a Sentence';

// // str.forEach((v)=>console.log(v))
// let arr= [];

//     let inStr ='';
// for(let i = 0; i< str.length; i++){
//     if(str[i] != " "){
//         inStr += str[i]
//     }else{
//         arr.push(inStr)
//         inStr =''
//     }
// }
//         arr.push(inStr)

// console.log(arr)
// let len =0
// arr.map((v)=>{
//     if(v.length > len){
// len =v.length
//     }
// })

// console.log(len)
// console.log(arr.filter((v)=> {
//     return v.length > 3} ))

// let newArr = arr.forEach((v)=> {
//      v += 'a'
// })

// console.log(newArr)


// // Remove duplicate;

// let str = 'aabbccdafbce'
// let strArr = str.split('');

// console.log(strArr)
// for(let i =0;i< str.length ;i++){
// // console.log(strArr)
//     for(let j= i+1; j< strArr.length; j++){
//         if(strArr[i]== -1){
//             continue
//         }
//         if(strArr[i] == strArr[j]){
//             strArr[j] = -1
//         }
//     }
// }
// console.log(strArr);
// str =''
// strArr.forEach((val,i)=>{
//     if(val != -1){
//         str += val
//     }
// })
// console.log(str);

////


// let str = 'aabbccdafbce';

// let obj = {};
// let result = ''
// for(let i=0;i<str.length;i++){
//     if(!obj[str[i]]){
//         obj[str[i]] = true;
//         result += str[i]
//     }
// }
// console.log(result)


// let str = 'aabbccdafbce';

// console.log(...new Set([...str]))


// console.log('10' - '2' + '5');
// console.log(true + false - '1' + '2');
// console.log(10 == '10' && '10' - 1 === 9);
// console.log('5' + 10 - 5);

// function foo2()
// {
//   return    
//   {
//       bar: "hello"
//   };
// }
// console.log(foo2())

// //////////////
// function sum(a,b){
//   if (b){
//       return a +b
//   }
//   return function(c){
//       return a + c
//   }
// }
//  // write a sum function such that by calling function both calls should give 6 as a result
// console.log(sum(1, 5));
// console.log(sum(1)(5));


////////////
// modify this code so that result will print 1 to 9 with the gap of 1 second
// async function run(){
//   for(let i=1;i<10; i++){
//       await new Promise(res =>{
//           setTimeout(()=>{
//               console.log(i);
//               res()
//           })
//       })
//   }
// }

// run();

// You have one array of even length eg [ 1, 1, 2, 3, 5, 7, 7, 4] and you have to divide this array into two different array of half length such that both arrays should have distinct elements.
// We can convert above array into [1, 2, 3, 7] and [ 1, 5, 7, 4] so return true if we can do that else return false.

// let arr = [ 1, 1, 2, 3, 5, 7, 7, 4,4,2];
// let isDevidable = true
// let obj= {};

// arr.forEach((val)=>{
//     if(obj[val]){
//         obj[val]++
//     }else{
//         obj[val] = 1
//     }
// })
// console.log(obj)

// for(let key in obj){
//     // console.log(key)
//     if(obj[key]> 2){
//         isDevidable = false
//     }
// }
// console.log(isDevidable)


// console.log(x + y + z);
// var count = 0;
//  function printCount(){
//     if(count === 0){
//         var count = 10;
//         console.log(count)
//     }
//     console.log(count)
//  }

//  printCount()

////////////////////////
// const obj = {
//   a: "foo",
//   b: function () {
//     console.log(this.a);
//   },
// };

// const c = obj.b.bind(obj);
// c()

// ////////////

// let x = 1;

// if(function f(){}){
//     // console.log(typeof f); 
//     x += typeof f;
// }

// console.log(x); 

//////////

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }
// console.log(foo2().bar); // output?



