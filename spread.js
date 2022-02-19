const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65, 21, 34);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

const numbers2 = [...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);

/*  // Quiz 31, number 6
const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ];
const array2 = [...nayikas];
console.log(array2); // result show [ 'mousumi', 'popy', 'shabnur', 'purnima' ] */

/*  // Quiz 31, number 7
const numbers = [10, 20, 30, 40, 50, 60, 70];
const maxInArray = Math.max(...numbers)
console.log(maxInArray); // result show 70 */

/*  // Quiz 31, number 8
const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari']; 
console.log(newCars); // result show [ 'toyota', 'honda', 'mercedes', 'ferrari' ] */

