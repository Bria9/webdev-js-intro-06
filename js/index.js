// Prevent us from attempting to use variables
// that are not declared
"use strict"

/* // Write a `for` loop that multiples each element
//  in the array `[2,4,6]` by 2 

let num = [2,4,6];

for (let i = 0; i < num.length; i++) {
    let multiply = num[i] * 2;   
    console.log(multiply);   
}

//Write a `for` loop that lists all the cities in the array 
// `["Paris", "New York", "Tokyo", "London",] and stores each 
 // city in a new array named `cityList`

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList =[];
console.log(cityList);   

for (let i = 0; i < cities.length; i++) {
   let  cCollection = cities[i];
   cityList.push(cCollection);
}
console.log(cityList);   

//EXERCISE 1
//Get the sum of two arrays…actually
//  the sum of all their elements. 
//https://avantutor.com/blog/10-simple-javascript-for-loop-exercises/

let num1 = [20, 5, 30, 50] //105
let num2 = [10, 15, 70, 35] // 130
let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < num1.length; i++) {
     sum1 += num1[i];
}
for (let i = 0; i < num2.length; i++) {
    sum2 += num2[i];
}

console.log(sum1);
console.log(sum2);
console.log(sum1 + sum2);

//EXERCISE 2
//Using a for loop print all even numbers up
//  to and including n. Don’t include 0.

let n1 = 22;

for (let i = 2; i <= n1; i += 2) {
  console.log(i);
}

let n2 = 10;

for (let i = 2; i <= n2 ; i++) {
     if( i % 2 ===0) {
      console.log(i);
     }
}

//EXERCISE 4
//Given two arrays of integers. Add up each element in
//  the same position and create a new array containing
//  the sum of each pair. Assume both arrays are of the 
// same length.

let arr3 = [4, 6, 7];
let arr4 = [8, 1, 9];
let arrNew = [];

for (let i = 0; i < arr3.length; i++) {
 let arrSum =  arr3[i] + arr4[i]
    arrNew.push(arrSum)
   //  console.log(arrSum);  
    }
    console.log(arrNew);  
 */
