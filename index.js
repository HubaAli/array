"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// *****push***** it add element at the end
let abc = [1, 2, 3, 4, 5];
abc.push(6);
console.log(abc);
// ****pop*** it removes the last element
let abc2 = [1, 2, 3, 4];
abc2.pop();
console.log(abc2);
// ***shift*** shift removes the first element
let abc3 = [1, 2, 3, 4, 5];
abc3.shift();
console.log(abc3);
// ****unshift*** it adds element on the first index
let abc4 = [1, 2, 3, 4, 5];
abc4.unshift(0);
console.log(abc4);
// ****concat**** it add element on the last index
let abc5 = [1, 2, 3, 4, 5, 6];
let huba = abc5.concat(7);
console.log(huba);
// *****join*** join the element with symbols
let abc6 = [1, 2, 3, 4, 5];
let huba1 = abc5.join('-');
console.log(huba1);
// *****slice**** the number you put in the bracket it will remove all the number.
let abc7 = [1, 2, 3, 4, 5];
let huba2 = abc7.slice(2);
console.log(huba2);
// ******indexOf****** it will tell the index of the element
let abc8 = [2, 3, 4, 1, 2, 4];
let huba3 = abc8.indexOf(4);
console.log(huba3);
// *****includes*****  it tells the num is present or not 
let abc9 = [1, 3, 2, 4, 65];
let huba4 = abc9.includes(63);
console.log(huba4);
// *****find***** it tells that which element is divided on 2
let abc10 = [1, 9, 4, 6, 8];
let huba5 = abc10.find((n) => n % 2 === 0);
console.log(huba5);
// *****findIndex***    ?????????
let abc11 = [5, 3, 6, 8];
let huba6 = abc11.findIndex((n) => n % 2 !== 0);
console.log(huba6);
// ******map**** mul * the array by given num.
let abc12 = [12, 14, 17];
let huba7 = abc12.map((n) => n * 3);
console.log(huba7);
// ***reverse*** it only reverse the order of array
let abc13 = [12, 14, 17];
let huba8 = abc13.reverse();
console.log(huba8);
// *****at**** it tells the num on our desire index
let abc14 = [12, 14, 17];
let huba9 = abc14.at(1);
console.log(huba9);
// ****some**** is tells that the array has greater or less number than the given num.
let abc15 = [12, 14, 17];
let huba10 = abc15.some((n) => n > 2);
console.log(huba10);
// *****every***** same as above
let abc16 = [12, 14, 17];
let huba11 = abc16.every((x) => x > 2);
console.log(huba11);
