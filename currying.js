/*
Currying is a technique which takes in n arguements
and convert it into a function which has 1 arguements
*/

function add(a,b){
    return a+b;
}

const sum=add(1,5)
console.log(sum)

// gets converted to

function add1(a){
    return function(b){
        return a+b;
    }
}

const sum1=add1(1)(5)
console.log(sum1)

// using arrow functions
const add2 = a => b => a+b;
console.log(add2(1)(5))