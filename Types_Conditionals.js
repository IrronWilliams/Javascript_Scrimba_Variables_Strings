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

/*SHORT CIRCUITING 
Approach level of simplification */

//program will evaluate response as true or false (truthy/falsy) and print either response user provided or guest.  
const response = "Reed" 
let username 
if (response) {
  username = response 
} else {
  username = "guest" 
}
console.log(username) 

//converting to ternary.  evaluate response, if response is true update username with response variable, if false update username with 'guest'
const username = response ? response : 'guest'

/*can use the or operator || to further simplify code. With ||, as soon as of its operands evaluates to true, it will be returned. 
if the 1st operand evaluates to true, it will stop at the 1st operand and return it. 

whenever  or || has a condition that resolves as true, either the 1st operand or second operand, its going to return that value. This 
also applies to truthy and falsy values*/
const result = true || false  //the 1st operand is true and will be returned and put in the result variable. 
const result = false || true  //the 2nd operand is true and will be returned and put in the result variable.  
const result = '' || 'Reed'  //the 2nd operand is truthy and 'Reed' will be returned and put in the result variable.
const result = 'Reed' || ''  //the 1st operand is truthy and 'Reed' will be returned and put in the result variable.

/*using short-circuiting to rewrite ternary to something more concise (removing the duplicate references to response)
if username is truthy return response and put in username. if username falsy return guest and put in username */
const username = response || 'guest' 

/*program will determine if username is valid by evaluating if response AND email has been verified. Username is valid if both
username and email are true(truthy). if username and email are both not true, then user will be provided with a guest username */
const response = "Reed" 
const isEmailVerified = true 
let username 
if (response) {
  if (isEmailVerified) {
    username = response 
  }  
} else {
  username = "guest" 
}
console.log(username) 

/*the and && logical operator allows me to evaluate multiple conditions. when the && operator sees a true or truthy value, it will 
skip the true/truthy value and go to the next operand. if 1st operand is false, && operator will immediately stop at the 1st false operator  */
const result = true && false  //1st operand is true. && operator skips over true and returns false and updates result with false
const result = false && true  //1st operand is false. && operator will stop at the 1st false, return false and updates result with false

/*
//1st operand is skipped because it is true. && operator goes to next operand and returns the string variable. the email address is 
then added to the email variable. So only if their email is verified will it be put in the email variable.  
*/
const isEmailVerified = true 
const email = isEmailVerified && 'reed@gmail.com'  

const isEmailVerified = false 
const email = isEmailVerified && 'reed@gmail.com'  //false will be put in email variable because isEmailVerified is false 

/*instead of having multiple if conditions, can join multiple conditions with the && operator.
in 1st operand, response is true/truthy, && moves to next operand and evaluates it to be true.  
if either the 1st or 2nd operand is false/falsy, guest will be returned and put in username

Short-circuiting using && (and) operator
 */
const response = "Reed" 
const isEmailVerified = true 
const username = response && isEmailVerified || "guest"  //username will be updated with true because isEmailVerified is true

const response = "Reed" 
const isEmailVerified = false 
const username = response && isEmailVerified || "guest"  //username will be updated with guest because isEmailVerified is false

const response = "Reed" 
const isEmailVerified = true 
const username = isEmailVerified && response || "guest"  /*username will be updated with 'Reed". changed the order of operands so that
                                                          isEmailVerified will be evaluated as true, so && moves on to response
                                                          response is returned and username is updated with response value */

/*Short-circuiting with || and  && operators can be very powerful tools. But be aware of operator precedence  which is the order in which  
the operators are performed. && has a higher operator precedence than ||. But if i want to specify the priority of the operand, 
i can wrap in parenthesis. Parenthesis have the highest precedence of all operators in JavaScript */
const username = isEmailVerified && response || "guest"  //conditional with && will be executed before conditional with ||
const username = isEmailVerified && (response || "guest")  //conditional with || will be evaluated 1st because wrapped in ()

/* Challenge 1: Let's say you're building Reddit. Only users that are either moderators or have reached a certain karma threshold 
are allowed to upvote. */

const karma = 143 
const isModerator = true 

// first use a ternary to set hasEnoughKarma to true if karma is above 100. If not, set it to false
let hasEnoughKarma 
hasEnoughKarma = karma > 100 ? true : false

//  set the value of canUpvote with short-circuiting (using hasEnoughKarma and isModerator)
let canUpvote 
canUpvote = isModerator || hasEnoughKarma //will evaluate 1st operator as true and return the results and add to canUpvote
canUpvote = hasEnoughKarma || isModerator //can switch operands and get same result. will evaluate 1st operator as true 
console.log("canUpvote:", canUpvote) 

/* Challenge 2: Let's say that only moderators who have enough karma are allowed to delete posts.  
How would you set the canDelete variable */

// set canDelete to true if both hasEnoughKarma and isModerator is true
let canDelete 
canDelete = hasEnoughKarma && isModerator //because 1st operand is true, && will skip and got to 2nd operand, return true and update canDelete with true
console.log("canDelete:", canDelete) 

// Challenge 3: what is the value of user? What if you switch the hasValidEmail variable to false? What if the response is empty?

/*Solution: PartA: (response || "guest") will be evaluated 1st because of (). 1st operand response will be evaluated as truthy.
|| stops at 1st truth/truthy, response will return JohnDoe and JohnDoe will be placed in user variable. 
this will set the expression (response || "guest") to 'JohnDoe'. so const user = hasValidEmail && (response || "guest")
has been changed to const user = hasValidEmail && "JohnDoe".

hasValidEmail && response will be evaluated next. hasValidEmail will be evaluated as true, so && skips to response  
response will be returned and JohnDoe added to user variable.

PartB: 
If hasValidEmail changes to false, (response || "guest") will still update user with true because response is truthy.
hasValidEmail && response will be evaluated. hasValidEmail will be evaluated as false and && stops at 1st false. user will be updated
with false.

PartC: if response is empty (response || "guest") will be evaluated as falsy because of 1st operand is blank, || moves to 2nd operand and 
returns guest and updates user with guest. 
*/ 
const response = "JohnDoe" 
const hasValidEmail = true 
const user = hasValidEmail && (response || "guest") 
console.log("user: ", user) 
