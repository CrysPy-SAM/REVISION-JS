// // Write a function to print "Hello, World!".

// // function A(){
// //     console.log("Hellow world")
// // }
// // // A();



// // Write a function that takes a name as input and prints "Hello, [name]!".

// // function name(value){
// //      console.log("Hello " +value+ "!");
// // }
// // name("Satyam");

// // Write a function that adds two numbers and returns the result.

// // function addNUM(num1,num2){
// //      return num1+num2
// // }

// // const result= addNUM(50,50);
// // console.log("Result:",result)

// // Write a function that checks whether a number is even or odd.

// // function check(num){
// //   if(typeof(num)!=="number"){
// //     return "Plzz enter an NUMBER"
// //   }
// //   if(num%2===0){
// //      return "even"
// //   }
// //   return "odd"
// // }
// // const result = check(20)
// // console.log(result)

// // Write a function that returns the square of a number.

// // function square(num){
// //     return num*num
// // }

// // const result = square(3)
// // console.log(result)


// // Write a function that finds the maximum of two numbers.

// // function mx(num1, num2){
// //     if(num1>num2){
// //       return num1
// //     }
// //     return num2
// // }

// // const result = mx(50, 60)
// // console.log(result)


// // Write a function that calculates the factorial of a number.
// // function factorial(num) {
// //   if (num < 0) return undefined; 
// //   if (num === 0 || num === 1) return 1;
// //   return num * factorial(num - 1);
// // }

// // console.log(factorial(10)); 

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(10)); 



//revere an STRING


// function reverse(SATYAM){
//     let Result = "";
//     for( let i=SATYAM.length-1; i>=0; i--){
//         Result = Result+SATYAM[i];
//     }
//     return Result;
// }

// console.log(reverse("Priyesh"));


// Write a function that converts Celsius to Fahrenheit.

// function convert(celceus){
//     let Fahrenheit = (celceus * 9/5) + 32;
//     return Fahrenheit
// }
// console.log(convert(1));



// Write a function that checks if a number is prime.

// function Check(value) {
//     if (value <= 1) {
//         return "Not Prime Number";
//     }
//     for (let i = 2; i < value; i++) {
//         if (value % i === 0) {
//             return "Not Prime Number";
//         }
//     }
//     return "Prime Number";
// }

// console.log(Check(30)); 



// Write a function that returns the sum of all numbers from 1 to n

// function sumUpTo(n) {
//     return (n * (n + 1)) / 2;
// }

// console.log(sumUpTo(5));


// Write a function that finds the largest number in an array


// function findLargest(arr) {
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return max;
// }

// console.log(findLargest([3, 7, 2, 9, 4]));  




// Write a function that returns the length of a given string.

// function lengthofStr(str){
//     return str.length;
// }

// console.log(lengthofStr("SATYAM"));


// Write a function to convert a number into a string.

// function NumToStr(value) {
//     return value.toString();  
// }

// console.log(NumToStr(43434345));
