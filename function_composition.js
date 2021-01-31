/*
Function compositon is an act or a mechanism
to combine simple functions to build more complicated ones
This is mainly used for abstraction and to enable unit-testing
*/

// exaple 1
// create a function which takes a string as input
// trims it then wraps it inside a div element


// naieve approach
let input= "    Javascript  "
let output="<div>"+input.trim()+"</div>"

// functional approach
// in this we break given task into small sub-tasks
// create functions to do those sub-tasks
// call those sub-functions inside a main function to do perform the given task


const trim= str => str.trim()   //returns trimmed string
const wrapinDiv=str => `<div>${str}</div>`  // returns a wrapped string

// function composition 2 functions
const result = wrapinDiv(trim(input))
console.log(result)

// function composition 3 functions

const toLowerCasefn = str => str.toLowerCase() // return lowercase of string
const result1=wrapinDiv(toLowerCasefn(trim(input)))
console.log(result1)