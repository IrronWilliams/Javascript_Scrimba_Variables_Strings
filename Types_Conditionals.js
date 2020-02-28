/*FLOW CONTROL STATEMENTS, IF/ELSE IF/ELSE/SWITCH*/

// if statements - evaluate boolean values
const prefersDarkMode = true

//this code will print a message to console and change the background to black 
if (prefersDarkMode) {
  console.log('dark mode set!')
  document.body.style.background = 'black'
}

//this code will print 1st message to console, change the background to black, print next message, change color to white
if (prefersDarkMode) {
    console.log('dark mode set!') 
    document.body.style.background = 'black'
  } //the code does not stop here, code continues to run statements that follow 
  
  console.log('light mode set!')
  document.body.style.background = 'ghostwhite'

/*to ensure console messages and background is changed based upon boolean value of prefersDarkMode variable, 
need to assign an else statement. Else statement is used when a condition is NOT met. If prefersDarkMode = true
background will be set to black. If prefersDarkMode is not true or = false, background will be set to white. 
*/
if (prefersDarkMode) {
    console.log('dark mode set!') 
    document.body.style.background = 'black'
  } else {    
    console.log('light mode set!')
    document.body.style.background = 'ghostwhite'
  }

/*else if allows us to evaluate multiple conditionals and is placed after the if and before else. this program
will set the background to palegoldenrod because the prefersSolarizedMode variable is the 1st condition to be 
evaluated as true. can have as many else if blocks as desired*/
const prefersDarkMode = false
const prefersSolarizedMode = true

if (prefersDarkMode) {
  console.log('dark mode set!')  
  document.body.style.background = 'black'
} else if (prefersSolarizedMode) {
   console.log('solarized mode set!') 
   document.body.style.background = 'palegoldenrod'
} else {    
  console.log('light mode set!')
  document.body.style.background = 'ghostwhite'
}

/*this program will change background to black because prefersDarkMode is the 1st condition to be evaluated as true.*/
const prefersDarkMode = true
const prefersSolarizedMode = true

if (prefersDarkMode) {
  console.log('dark mode set!')  
  document.body.style.background = 'black'
} else if (prefersSolarizedMode) {
   console.log('solarized mode set!') 
   document.body.style.background = 'palegoldenrod'
} else {    
  console.log('light mode set!')
  document.body.style.background = 'ghostwhite'
}

/*if user prefersSolarized over DarkMode, switch order of conditionals. Solarized will be if and prefersDark will else if.*/
const prefersDarkMode = true
const prefersSolarizedMode = true

if (prefersSolarizedMode) {
    console.log('solarized mode set!')  
    document.body.style.background = 'palegoldenrod' 
 } else if (prefersDarkMode) {
   console.log('dark mode set!')   
   document.body.style.background = 'black' 
 } else {    
   console.log('light mode set!') 
   document.body.style.background = 'ghostwhite' 
 }

/*to dynamically update program based upon user desired color can be managed with if statements but will become
tedious to manage with multiple options. Better approach is to use switch statements. */
const colorMode = 'dark' 

switch (colorMode) {
  case "solarized":
   console.log('solarized mode set!')  
   document.body.style.background = 'palegoldenrod' 
    break   //break limits condition to a single case. if excluded, code will continue to run and return results of default case
  case 'dark':
    console.log('dark mode set!')   
    document.body.style.background = 'black' 
    break 
  default:    //default is comparable to else statement 
    console.log('light mode set!') 
    document.body.style.background = 'ghostwhite' 
}

// Challenge 1: create a conditional that logs out "Good morning!", "Good evening!" and so on depending on the value of time (<- a variable)
const time = "morning" // could be "afternoon", "evening" and "night"

if (time === "morning") {
    console.log("Good morning!") 
} else if (time === "afternoon") {
    console.log("Good afternoon!") 
} else if (time === "evening") {
    console.log("Good evening!") 
} else {
    console.log("Good night!") 
}
// Challenge 2: Rewrite the whole thing as a switch statement
switch (time) {
    case "morning":
        console.log("Good morning!") 
    break  
    case "afternoon":
        console.log("Good afternoon!") 
    break  
    case "evening":
        console.log("Good evening!") 
    break 
    default:
        console.log("Good night!") 
}

/*DATA TYPES *

Primitive types:

string
number
boolean
undefined
null
symbol

everything else - Object type

typeof operator tells me the data type.

*/
let message = 'some string' 
console.log(typeof message)  //returns string

//do not need variable to use typeof. can use typeof directly on values themselves
console.log(typeof 42)  //returns number
console.log(typeof true)  //returns boolean
console.log(typeof window)  //returns object

//Explicit type conversion occurs when I manually instruct JavaScript to change datatype
console.log(String(42))  //converts integer into string  returns '42'
console.log(Boolean(message))  //converts string into boolean  returns true

//Implicit type conversion (aka coercion) occurs when JavaScript automatically converts or uses coercion on data types 
console.log('1' * '2')  //the multiplication operator uses coercion to change the two strings into numbers to return the integer 2
console.log('10' + 20)  //returns '1020'

/*
When Javascript evaluates a conditional, it tries to convert the datatype it is evaluating to boolean (regardless of the datatype) and 
compares that value to the boolean true. So in the end if (true === true), then the condition will be passed. So basically JavaScript 
takes any datatype that is provided as a conditional and turns the datatype as true or false. 

We can divide all data that is not boolean (true or false) in either 2 categories  truthy or falsy. When a value is truthy that means the 
value was coercised into a boolean true in a conditional. If the value is falsy it means it was coercised into boolean false in a conditional. 

The following values will always be falsy when run thru a conditional:

false
0     ---> number zero
''    ---> empty string including "" and ``
null  ---> value used by developers to communicate an empty value
undefined  ---> JavaScripts way of communicating that a variable is empty
NaN

All other values will be coercised into truthy

*/
if (Boolean(value) === true) {
    // if true, do something with value  
  }

//program will print run because hello was coercised to a truthy value.  Program does not consider else because it matched 1st boolean true. 
if ('hello') {
console.log('run') 
} else {
console.log('skipped') 
}

//program will print skipped because 0 was coercised to a falsy value. 
if (0) {
    console.log('run') 
  } else {
    console.log('skipped') 
  }

/*To avoid the pitfalls of truthy/falsy when comparing values/data 

1. Avoid direct comparisons in conditionals
2. Use triple equals === (strict equals operator).  === does not allow type conversion
3. Convert to real Boolean values where needed
*/

//trying to check if we do not have a username
const username = ''  //we know that an empty string is a falsy value
if (username === false) { //JavaScript will attempt to coerce the value username to determine if its true or false. So best not to make comparison here.
  console.log('no user')  
}

//not using direct comparisons to check if we do not have a username
if (!username) { //better approach is to use the logical not operator. so this evaluates if 'not username'.  this will return no user. 
    console.log('no user') 
  }

const username = null 
if (!username) { //using the logical not operator will work with any falsy value. this will still return no user. 
console.log('no user') 
}

const username = undefined 
if (!username) {  //using the logical not operator will work with any falsy value. this will still return no user. 
  console.log('no user') 
}

/*You would expect to get not equals returned from this program because null and undefined are 2 different data types. However, when 
you run this code, equals is returned. This is because the loose equal operator, ==, is coercing these values so that they are viewed as 
having the same data type. */
if (null == undefined) {
    console.log('equals')  //returns equals
  } else {
    console.log('not equals') 
  }

//using the strict equals operator will return the expected value not equals because it will not allow coercing of values, thus they will be recognized as different. 
if (null === undefined) {
console.log('equals') 
} else {
console.log('not equals')  //returns not equals. 
}

//in some cases may need to convert to real Boolean values. this program will unexpectedly return not equals. 
if (NaN === NaN) {
    console.log('equal')
} else {
    console.log('not equals') //returns not equals
}

//need to explicity convert Nan to a Boolean value to return expected results. 
if (Boolean(NaN) === Boolean(NaN)) {
    console.log('equal') //returns equal
} else {
    console.log('not equals')
}

// Challenge 1:
// What will the following console logs display? (they're all true or false)
console.log("Challenge 1:") 
console.log(!undefined)  //true - undefined is falsy but the logical not operator flips the value and returns opposite 
console.log(Boolean(NaN))  //false - NaN is a falsy value and turning it into a Boolean
console.log(false === false)  //true - using strict equality to determine if false equals false
console.log(5 === "5")  //false - using strict equality to compare an integer to a string, which are not the same
console.log("Hello" == "hello")  //false. checking for loose equality, because of capital H, these are different strings

// Challenge 2:
// What will the following console logs display? (they're all true or false)
console.log("Challenge 2:") 
console.log(Boolean(0))  //false - 0 is a falsy value
console.log(Boolean("0"))  //true - string values are not falsy
console.log(Boolean(""))  //false - empty strings are falsy values
console.log(!null)  //true - null is a falsy value but using logical not operator flips value 
console.log(!!"hello")  //true - string is a truthy value but double 

// Challenge 3:
// List all the falsy values in JavaScript
//Solution: 0, '', false, undefined, null, NaN

/* SHORTENING CONDITIONALS WITH TERNARIES 
ternaries help to conditionally assign a variable w/o repetition. 
Use if/then to perform an action. 
ternaries are expressions. use ternaries to return a value. 
*/

//in this program we are using cartItemCount multiple times. When using variables multiple times, usually theres a pattern to only use 1x
const isAuthenticated = false 
let cartItemCount = 0 
if (isAuthenticated) {
  // add item to cart
  cartItemCount = 1 
} else {
  // tell user to login
//   console.log("Please log in!") 
  cartItemCount = 0 
}

/* can simplify code by using ternary operator. a ternary is an expression instead of a statement. a ternary as an expression results 
in a value and when it runs, returns a given value. For example, the condition isAuthenticated runs and is determined to be true.   
the 'then' part of if statement runs results in a value of 1 and since this is an expression, the value of 1 can be put in a variable 
called cartItemCount. ternary allows the variable to be created 'in-line' the condition vs. above the condition as in the if statement. 
The 'else' part of the if statement is placed after the colon. In this case, the 0 will follow the colon.

ternary operators are a big win because they increase the reliability of code (uses const instead of let and var). ternaries also 
add value by reducing several lines of code*/

/* isAuthenticated is evaluated and determined to be either true or false. If isAuthenticated is true, the 'then' expression runs and 
add 1 implicitly returned and assigned to cartItemCount. If isAuthenticated is false, else expression runs and 0 implicitly returned 
and assigned to cartItemCount*/
const isAuthenticated = false
const cartItemCount = isAuthenticated ? 1 : 0 

/*ternary should not be used for every conditional. they should be used to return a value. Should not be used to perform an action or
multiple actions. 

this program prints 'please log in' but also returns null/undefined,  which is default return 
value of a function. we are no longer getting the expected value of 0 because we are using ternary operator to perform an action*/
const cartItemCount = isAuthenticated ? 1 : console.log("Please log in!") 
console.log(cartItemCount) 

const age = 20
let greeting
if (age < 10) {
  greeting = "Hey there" 
} else {
  greeting = "That's an interesting age!"  
}
console.log(greeting)

/* benefit of using ternary operator is the ability to use const to declare variable I am conditionally assigning. instead of let 
that I had to use in the if/else statement because of block scoping. */
const greeting = age < 10 ? "Hey there" : "That's an interesting age!"
console.log(greeting)

/*can chain multiple ternaries to address else if statements. although possible, avoid doing so because statement becomes hard to read 
and looses value of simplicity that initially gained by writing ternary. for complex conditions use if statements. 
const age = 12
let greeting
if (age < 10) {
  greeting = "Hey there" 
} else if (age > 18) {
  greeting = "Greetings"  
} else if (age > 10) {
  greeting = "What's up?"  
} else {
  greeting = "That's an interesting age!"  
}
console.log(greeting)

/* to chain the first ternary, chain it to the position of where the else would be if the ternary only had if/else. 
then create the ternary by adding a ?*/
const greeting = age < 10 ? "Hey there" : age > 18 ? "Greetings" : age > 10 ? "What's up?" : "That's an interesting age!"
console.log(greeting)


/* Challenge 1: Check if the user is allowed to add an "iPad" to its shopping cart. Write a ternary that sets the shoppingCart 
variable to "iPad" if the user is authenticated, and an empty string if the user isn't authenticated.

shoppingCart = isAuthenticated === true ? is not necessary 
*/
const isAuthenticated = true
let shoppingCart
shoppingCart = isAuthenticated ? 'iPad' : ''
console.log("shoppingCart: ", shoppingCart)

/*Challenge 2: Check if user is old enough. Write a ternary that sets allowedAccess to true if the age is 18 or more, or false if not*/
const age = 20
let allowedAccess
allowedAccess = age >= 18 ? true: false
console.log("allowedAccess: ", allowedAccess)
