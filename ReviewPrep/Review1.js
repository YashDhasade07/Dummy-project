// ************Closures

// function increment(){
//     let counter = 0;
//     return function(){
//         counter++;
//         console.log(counter)
//     }
// };

// let inc = increment();

// inc();
// inc();

///// Lexical Scope
// let number = 42;

// function innerFunction(){
//     console.log(number)
// }
// function outer(){
//     let number = 3;
//     innerFunction()
// }

// outer()

// ***********Scope Chaining

// export function Abc() {
    
//     this.yash = "yash";
//     return ()=> {
//         console.log(this.yash);
//     }
// }

// let fn = new Abc();
// fn()

    // //  lexical scope
    // function outer() {
    //     let name = "John";
        
    //     function inner() {
    //         console.log(name);  
    //     }
        
    //     return inner;
    // }
    
    // const closureFunc = outer();
    // closureFunc(); 
    
    // const obj = {
    //     name: "John",
    //     printName: function () {
    //         console.log(this.name);
    //     }
    // };
    
    // const print = obj.printName;
    // print();  // ❌ Undefined (this refers to global object)
    // obj.printName();  // ✅ "John" (this refers to obj)



    ////////////////
    // if (true) {
    //     const y = 5;
    //     var z = 10;
    //   }
    //   console.log(y); // What logs?
    //   console.log(z); // What logs?
    //   const y = 5;

// // //////////////////

//     function foo() {
//         console.log(bar); // What logs?
//       }
//       function baz() {
//         var bar = "surprise!";
//         foo();
//       }
//       baz();


    // // ******************Constructer function
    // function Person(name, age) {
    //     this.name = name;
    //     this.age = age;
    //     this.counter = 0
    // }
    
    // // Adding methods to the prototype
    // Person.prototype.sayHello = function () {
    //     this.counter++
    //     console.log(this.counter);
    // };
    // Person.prototype.newVar = 5
    
    // // Creating an instance
    // const person1 = new Person("Yash", 25);
    // person1.sayHello(); // Output: Hello, my name is Yash and I am 25 years old.
    // person1.sayHello(); // Output: Hello, my name is Yash and I am 25 years old.
    // console.log(person1.newVar);


    // /////////

      
    // const obj = {
    //     value: 10,
    //     getValue: () => this.value,
    //   };
    //   console.log(obj.getValue); // ?

    // /////////
    //   async function getData() {
    //     return "Data fetched";
    //   }
      
    //   const result = await getData();
    //   console.log(result);
    /////////////


console.log(typeof (function a(){})); 