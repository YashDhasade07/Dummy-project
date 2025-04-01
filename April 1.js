// // WAP to reverse an integer without converting it to a string, without using any built-in methods.

// function reverseNum(num){
//     let newNum =0;
    
//     while(num>0){
//         let rem = num % 10
//         newNum = newNum *10 + rem;
//         // num /= 10;
//         num = Math.floor(num/10)
//     }
    
//     console.log(newNum)
// }
// reverseNum(3451356)



////// Swap Values without using any variable a=10, b=12.

// let a = 23;
//  let b = 87;
 
//   a = a+b;
//   b = a -b;
//   a = a-b
  
//   console.log(a,b)


// 3. Logic for anagram program with its time complexity. (for large strings).

    // function checkAnagram(str1,str2){
    //     let str1Arr = str1.split('').sort().join('')
    //     let str2Arr = str2.split('').sort().join('')
    //     console.log(str1Arr == str2Arr)
    // }
    
    // checkAnagram('dbacy',`aycdb`);
    
    
    ///////WAP to print Fibonacci series without recursion.
    
    // let arr =[0,1];
    
    // function fib(n){
    //     while(arr.length <= n){
    //         arr.push(arr[arr.length-1] + arr[arr.length-2])
    //     }
    // }
    
    // fib(20)
    
    // console.log(...arr)
    
    /////////write a program to write a factorial 
    
    // function fact(num){
    //     if(num ==1){
    //       return 1
    //     }
    //     return num *fact(num-1)
    // }
    
    // console.log(fact(5))
    
    
    // WAP for getting a square root of a given number.
    
    // function sqrt(num){
    //     for(let i=1; i <= num/2; i++){
    //         if(i*i == num){
    //             return i;
    //         }
    //     }
        
    //     return false
    // }
    
    // console.log(sqrt(26))
    
    // WAP with 2 different logic, to find all duplicate numbers in an array.WAP with 2 different logic, to find all duplicate numbers in an array.
    
    // let arr = [1,2,3,4,5,6,2,3,4,5,7,8,9,10]
    
    // // for(let i =0; i< arr.length-1 ; i++){
    // //     for(let j =i+1; j<arr.length; j++){
    // //         if(arr[i]==arr[j]){
    // //             console.log(arr[j])
    // //         }
    // //     }
    // // }
    

    // console.log(new Set(arr).size)
    
    // [80, 60, 10, 50, 30, 100, 0, 50]
// Find pairs whose sum = 100;

// let arr= [80, 60, 10, 50,20, 30, 100, 0, 50,40];

// for(let i = 0;i< arr.length-1; i++){
//     for(let j = i+1;j< arr.length; j++){
//     if(arr[i] +arr[j] ===100){
//         console.log(arr[i] ,arr[j])
//     }
//   }
// }


// use forEach loop
// let arr= [80, 60, 10, 50,20, 30, 100, 0, 50,40];

//  let result = arr.filter((val,i)=>70>val);
//  console.log(result)

//////
//  async function abc(){
//      console.log(1)
//      await new Promise((res)=>setTimeout(()=>{console.log(2) 
//      res()},1000))
//      console.log(3)
//  }
//  abc()

/////////
// console.log("Start");

// setTimeout(() => console.log("setTimeout"), 0);
// Promise.resolve().then(() => console.log("Promise.then"));
// queueMicrotask(() => console.log("queueMicrotask"));

// console.log("End");


// // Splice

// let arr = [80, 60, 10, 50, 30, 100, 0, 50];
// let a = [143, 3000,23]
// arr.splice(1,2,...a)
// console.log(arr);

////////

// console.log("Start");

// const promise = new Promise((resolve, reject) => {
//     console.log("Promise constructor");
//     resolve();
// });

// setTimeout(() => {
//     console.log("setTimeout");
// }, 0);

// promise.then(() => {
//     console.log("Promise then 1");
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Promise inside setTimeout");
//             resolve();
//         }, 0);
//     });
// }).then(() => {
//     console.log("Promise then 2");
// });

// console.log("End");


// // /////////
// async function abc(){
//     console.log(1);
    
//     await new Promise((res)=>{
//         setTimeout(()=>{
//             console.log(2)
//             res()
//         },2000)
//     })
    
//     console.log(3)
// }
// abc()

// async function firstFunc() {
//   console.log(1)
//  await new Promise((resolve,reject)=> setTimeout( ()=> resolve(console.log(2)) , 1000))
//   console.log(3)
// }

// firstFunc()

//  Rest

// function rest(...ret){
//     console.log(ret)
// }
// rest(1,2,3,4,5,6)

// ///////////////////// getter setter

let person ={
    Fname: "Yash",
    Lname: "Dhasade",
    
   get getName(){
        return `${this.Fname} ${this.Lname}`
    },
    set setName(val){
        let parts = val.split(' ');
        this.Fname = parts[0]
        this.Lname = parts[1]
    }
}
person.setName='Jhon Doe'
console.log(person);


    
    
    














































