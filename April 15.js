let i =3;

function abc(){
    console.log(++i);
}

i =24;

abc()

function shadow(param) {
    console.log(param);
    var param = "shadowed";
    console.log(param);
  }
  shadow("original");

  // Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro

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

// // Using process.nextTick (executes in the next phase before I/O events)
// process.nextTick(() => {
//   console.log("Executed process.nextTick");
// });

// // Using queueMicrotask (executes in the microtask queue like Promises)
// queueMicrotask(() => {
//   console.log("Executed queueMicrotask");
// });



// console.log("End of script");


// console.log(this)



// let str= 'usnfyeq';
// let strArr= str.split('')
// // let newStr=''
// for(let i=0;i<str.length-1; i++){
//     for(let j =i; j< str.length; j++){
//         if(strArr[i]>strArr[j]){
//           [ strArr[i], strArr[j]] = [ strArr[j], strArr[i]]
//         }
//     }
// }
// console.log(strArr.join(''))


this.name = 'yash'

// let obj = {
//     a: console.log(this.name),
//   name: 'Alice',
//   greet: ()=> {
//       console.log(`Hello, ${this.name}`);
//   }
// };
// obj.greet(); // ?

// let obj = {
//   name: 'Alice',
//   greet: function() {
//     setTimeout(function() {
//       console.log(`Hello, ${this.name}`);
//     }, 100);
//   }
// };
// // obj.greet();

// let obj = {
//   name: "Alice",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// let greetCopy = obj.greet;
// greetCopy();

// function sayHi() {
//   console.log(this.name);
// }

// const user1 = {
//   name: 'Yash',
//   hi: sayHi
// };

// const ref = user1.hi.bind(user1);
// ref(); // 👉 What will this print?



// function abc(greet,message){
//     console.log(greet,this.name, message)
// }

// let user = {name: "Jui"}

// let a = abc.bind(user);
// a('hii', "how are you")
// abc.call(user,'hii', "how are you")
// abc.apply(user,['hii', "how are you"])


// ///////
// function createPerson(initialAge) {
//   // Your code here
//   let age = initialAge;
//   return {
//       getAge(){
//           return age;
//       },
//       growOlder(){
//           age++
//       }
//   }
// }

// const person = createPerson(25);
// console.log(person.getAge()); // Expected: 25
// person.growOlder();
// console.log(person.getAge()); // Expected: 26

/////

// {
//   function show() {
//     console.log("Block-level function");
//   }
//   show();
// }
// try {
//   show(); // ?
// } catch (e) {
//   console.log("Error: " + e.message);
// }

// // console.log(foo); // ?
//  foo = "bar";
//  var foo =12
// // function foo() {}
// console.log(foo); // ?


// for (let i = 0; i < 2; i++) {
//   for (var j = 0; j < 2; j++) {
//     setTimeout(() => {
//       console.log("i:", i, "j:", j);
//     }, 50);
//   }
// }

///////////
function shadow(param) {
  console.log(param);
  var param = "shadowed";
  console.log(param);
}
shadow("original");