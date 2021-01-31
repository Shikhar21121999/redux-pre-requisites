/*
Using composing and piping
with loadash to transform the composite function
and improve readability
*/

import { compose, pipe } from 'loadash/fp'

let input= "    Javascript  "

const trim= str => str.trim()   //returns trimmed string
const wrapinDiv=str => `<div>${str}</div>`  // returns a wrapped string
const toLowerCasefn = str => str.toLowerCase() // return lowercase of string

// compose is used to compose a function out of given functions
const transform=compose(wrapinDiv, toLowerCasefn, trim);
console.log("using compose")
console.log(transform(input))
// use pipe to go a step forward to reverse the order
// to improve readiblity and understanding of function
// when we use pipe functions appear in the order they are called
// forward to backward

const transform1= pipe(trim, toLowerCasefn, wrapinDiv)
console.log("using pipe")
console.log(transform1(input))