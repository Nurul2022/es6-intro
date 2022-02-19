function add(num1, num2 = 33) {
    // option 2     // num2 = num2 || 0;
    // option 1    
     // if (num2 == undefined) {
       //  num2 = 0; 
   // }
    const total = num1 + num2;
    return total;
}
const result = add(15, 0);
console.log(result);


function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}


// Quiz31/ number 2
function getSum(a, b=9)
{return a+b;} 
console.log(getSum(2, 7)); // result show 9

// Quiz31/ number 3
const y = x => x*x; 
const z = y(5); 
console.log(z);  // result show 25
