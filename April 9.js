// let orignal = ["eat", "tea", "tan", "ate", "nat", "bat"];
// let str = ["eat", "tea", "tan", "ate", "nat", "bat"];
// let result = [];
// // let index= []
// let obj = {};
// for (let i = 0; i < str.length; i++) {
//   str[i] = sortStr(str[i]);
// }
// console.log(str);
// for (let i = 0; i < str.length; i++) {
//   if (str[i] in obj) {
//     obj[str[i]].push(i);
//   } else {
//     obj = { ...obj, [str[i]]: [i] };
//   }
// }
// console.log(obj);

// for (let key in obj) {
//   // let arr =obj[key];
//   let arr = [];
//   obj[key].forEach((val) => {
//     arr.push(orignal[val]);
//   });

//   result.push(arr);
// }
// console.log(result);

// function sortStr(str) {
//   let strArr = str.split("");
//   for (let i = 0; i < strArr.length - 1; i++) {
//     for (let j = 0; j < strArr.length; j++) {
//       if (strArr[j] > strArr[j + 1]) {
//         [strArr[j], strArr[j + 1]] = [strArr[j + 1], strArr[j]];
//       }
//     }
//   }
//   return strArr.join("");
// }

//////
// let orignal = ["eat", "tea", "tan", "ate", "nat", "bat"];
// let result = [];
// for (let i = 0; i < orignal.length; i++) {
//   if (orignal[i] == -1) continue;
//   let arr = [orignal[i]];
//   let sort = sortStr(orignal[i]);
//   for (let j = i + 1; j < orignal.length; j++) {
//     if (orignal[j] == -1) continue;
//     if (sort == sortStr(orignal[j])) {
//       arr.push(orignal[j]);
//       orignal[j] = -1;
//     }
//   }
//   orignal[i] = -1;
//   result.push(arr);
// }
// console.log(result);

// function sortStr(str) {
//   let strArr = str.split("");
//   for (let i = 0; i < strArr.length - 1; i++) {
//     for (let j = 0; j < strArr.length; j++) {
//       if (strArr[j] > strArr[j + 1]) {
//         [strArr[j], strArr[j + 1]] = [strArr[j + 1], strArr[j]];
//       }
//     }
//   }
//   return strArr.join("");
// }


//     name: 'Yash',
//     greet: function () {
//         console.log(this.name);
//     }
// };

// setTimeout(function(){return person.greet()}, 0);

// const person1 = {
//     name: 'Yash',
//     greet: function () {
// setTimeout(()=>{
//     console.log(this.name);

// },0)
//     }
// };
// person1.greet()
// setTimeout(()=>{person1.greet()}, 0);




// const counter = {
//     count: 0,
//     increment: function() {
//       this.count++;
//       console.log(this.count);
//     },
//     value: this.count
//   };
  
//   Promise.resolve()
//     .then(counter.count)
//     .then((val)=>{
//         counter.increment()
//     console.log(val)}); // What will this log?

///////////
// const person = {
//     name: 'Yash',
//     greet: function () {
//         console.log(this.name);
//     }
// };

// setTimeout(person.greet, 0);
/////////////////////
// const obj = {
//     name: 'Code',
//     getName: function() {
//         return this.name;
//     }
// };

// const getName = obj.getName;
// console.log(getName());
///////////

// const counter = {
//     count: 0,
//     increment: function() {
//       count++;
//       console.log(count);
//     }
//   };
  
//   let increment = counter.increment;
//   counter.increment()

// ////////

// let count= 0,
// counter () {
//     increment: function () {
//       count++;
//       console.log(count);
//     }
//   };




// function go() {
//     let a =42
//   try {
//     return a;
//   } finally {
//     // return 99;
//     console.log(0)
//   }
// }

// console.log(go()); // ?

///////////////////

// console.log(Math.sqrt(16));
// let a= 3;
// let a = 13
////
// let a=3;

// a[0] =2;

// console.log(a[1])


// 16. Given an array of strings, group the anagrams together. You can return the answer in any order.
//  Output: [["bat"],["nat","tan"],["ate","eat","tea"];

let str = ["eat","tea","tan","ate","nat","bat"]
//         for(let i= 0; i< str.length ;i++){
//           for(let j=0;j<str[i].length;j++){
//               for(let k =0; k< str[i].length-i-1;k++ ){
//                   if(str[i][k] > str[i][k+1]){
//                       [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]]
//                   }
//               }
//           } 
//         }

        // for(let i= 0; i< str.length ;i++){
        //   let strArr = str[i].split('');
        //   for(let j=0;j<str[i].length-1;j++){
        //       for(let k =1; k< str[i].length;k++ ){
                  
        //       }
        //   }
        // }
        

//         function sortStr(str){
//           let strArr = str[i].split('');
//             for(let i= 0; i< strArr.length -1;i++){
//           for(let j=0;j<strArr.length;j++){
//               if(strArr[j]> strArr[j+1]){
//                   [strArr[j], strArr[j+1]] = [strArr[j+1], strArr[j]]
//               }
//           }
//         }
//         return strArr
//         }

// console.log(sortStr('eat'))

// 

// for(let j=1; j<1; j++){
//     console.log(j)
//     }
// console.log(x)
// let x = 3
