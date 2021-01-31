/*
Higher order functions in the most basic terms are the functions
that work or operate on other functions
they can either take a function as an arguement or return a function or both
*/

let number = [1,2,3]

// map is an example of higher order function
// as it takes a function as an arguement and operates
// that function on each element of the array
const twice_number=number.map(no => no*2)
console.log(twice_number)

// setTimeout is a higher order function
// which takes a function as an arguement and executes it after a delay
setTimeout(()=> console.log("hello after delay"),1000);