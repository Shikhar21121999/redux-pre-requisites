// functions are first class citizens in java script
// we can treat them as objects in java script

function sayHello(){
    return "Hello World";
}

// saving an allias to sayHello function (object)
let fn = sayHello;
// calling fn
console.log(fn())  
// calling sayHello()
console.log(sayHello())

// we can also pass a function as an arguement to another function
function greet(fnMessage){
    /*
    This function simply takes a function as arguement
    ans logs out the value returned by that function
    */
    
    console.log(fnMessage())

}

// calling greet with sayHello as arguement
greet(sayHello);

/*
In java script we can 
1) pass a function as an arguement to another function
2) we can assign a function to a variable
3) we can also return a function from another function
*/

// returning a function from another function
function outerfn() {
    // this returns a function
    return function() {
        // annonymous funtion
        // which returns a string
        return "string returned from inner function";
    }
}

let fn2=outerfn();   // returns a function that is assigned to variable fn
let message=fn2();   // returns a message which is assigned to message
console.log(message)
