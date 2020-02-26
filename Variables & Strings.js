message = 'hello world'
var message = 'hello world again'  

/* Understanding var and its limitations. 
There is a difference between these statements. 
running the code for message (line1) will not return an error. a value called message was created but was not created as a variable (line2)
message was added to the Global Object. The Global Object can be accessed anywhere within the application. The Global Object
is different via the environment JavaScript runs in. In the browser, reference to Global Object is widow. Even though we can access message 
like its a variable, it is not a variable. It is actually a property of the Global Object. This can be concerning/confusing if I created
a variable called message. 
*/

console.log(window)  //returns window
console.log(window.message) //checks to see if message was put on windows. returns the message hello world
console.log(message)  //can omit window and get hello world

//This is an example of how this behavior can be problematic. 
console = 'hi'
console.log('hi') // returns TypeError: console.log is not a function.

/*
console.log('hi') is a function, and I am passing the string 'hi'. console is also the property of window. ommitting window in statement
window.console.log('hi') is the same as console.log('hi')
If i were to incorrectly create a variable called console and set it to the string 'hi' and then afterward try to correctly use 
console.log() function. This will return an error because I overwrote the console property on the window object; 
simply because I forget to include var; var console = 'hi'.

I can change this behavior by understanding how JavaScript is run. JavaScript can be executed in 2 modes; sloppy or strict.
Sloppy mode/normal is the default mode. Strict mode is where several pitfalls of normal mode are removed and more errors are
thrown. Type 'use strict' on 1st line to change from normal to strict mode. 
*/

/*USING STRICT MODE, HOISTING, VALUE OF LET, CONST */
"use strict"

message = "hello world" // because of strict mode, JavaScript will immediately throw error ReferenceError: message is not defined. 

/*Normal mode allowed message to be added to the Global Object. Strict mode will prevent mutating/changing Global Object or over-riding 
existing properties on it. */
       
/*hoisting is the strange ability that JavaScript has to access a variable before its created.*/
       
"use strict"

//will behave as expected
var age = 26
console.log(age) //returns 26

//will not behave as expected because of hoisting
console.log(age) //returns null, an empty value of a variable
var age = 26

/*With hoisting, the variable declaration (not the value) has been shifted to top of the context its running in or its scope. 
using strict corrects some problems with var but not all, specifically does not address problems regarding hoisting. Var declarations
are hoisted meaning we can access variable before they are created. 

variables let and const are not susceptible to the behavior of hoisting. let and const are not hoisted and stop program immediately 
with errors. Use let when the variable will change. Use const when variable will not change. Const variables needs to be initialized 
when created and cannot be changed. let variable do not need to initialized when created and can be changed. 

let age; //declare variable age
age = 26 //initialize it by giving its initial value
age = 36 //reassign value 

const age //declaring a const variable w/o initalizing it will result in error. SyntaxError: Missing initializer in const declaration
const age = 26 //need to be initialized when declared and cannot be changed. 
const age = 37 //Attempting to change reassign after declaration will result in an error

best to use const to assign variables because let and var can be reassigned at anytime.  using const signals to others that variables 
should not be changed at ANYTIME. Const allows variables to be less unpredictable and not subject to change. const works best with 
primitive data types, numbers, strings, booleans. const does have vulnerability when working with non primitive data types like objects.

const originalPrice = 50;
const percentOff = 20;
const salePrice = originalPrice * (percentOff / 100);

let salePrice = originalPrice * (percentOff / 100); //if need to reassign a variables value, switch from const to let

console.log(salePrice);
*/

'use strict'
var age //variable declaration w/o value
console.log(age) //undefined 
age = 26  //assigning value 

//using let
console.log(age) //ReferenceError: Cannot access 'age' before initialization
let age = 26

//using const
console.log(age) //ReferenceError: Cannot access 'age' before initialization
const age = 26


'use strict'
// Challenge 1: We want to log out the name "Reed", but it doesn't work. Can you fix it?
const name
name = "Reed"
console.log(name)

//Solution/Explanation. This is a constant variable and constant variables need to be declared and initialized at same time. 
const name = "Reed"
console.log(name)

// Challenge 2: We want 102 to be logged out. But we're getting an error instead. Try to fix it!
const count = 100
count = 101
count = 102
console.log(count)

//Solution/Explanation. Constant variables changed. But let variable can be changed at different points of the program. 
//when const variable is declared.  
let count = 100
count = 101
count = 102
console.log(count)

//  Challenge 3: We want to log out the price (50), but it doesn't work. Can you fix it?
let price
console.log(price)
price = 50

//Solution/Explanation. Problem here is that we are declaring value, logging it out and then initializing it. Move initializing 
//statement above console.log function
let price
price = 50
console.log(price)

/* VARIABLE SHADOWING
Variable shadowing occurs when one variable overrides other variables with the same name that belong to a wider scope. 
In this example, the price variable declared in the if block shadows and overrides the other price variable (price = 20).  
When isSale is true, the original price of 20 is also being set (shadowing) to 18. The original price should remain 20. 
The problem is the new sales price is not just living inside the if block, the new sales price is also living outside of its context of 
the if block and affecting the other price variable. var completely ignores the curly brackets/code block of the if statement, 
and as a result the original price variable is changed to the sales price instead of creating a new variable within the code block of 
if statement. 

To address this issue with var, use let or const as they are block-scoped. This means any variable created within a block, ie if 
statement, does not exist outside its scope and cannot be accessed outside of the block. The variable will not exist outside in the 
outer scope.  
*/
var price = 20
var isSale = true

// variable shadowing
if (isSale) { //don't need to say if (isSale) == true.  if (isSale) will be evaluated as either true or false
  // discount price of product
  var price = 20 - 2
  // do something 
  console.log('sale price', price) //returns sale price, 18
}
console.log('price', price) //returns price, 18

//changing to let, which is block-scoped to if statement. Will not change 1st price variable because 2 price variables are now in separate scopes 
if (isSale) { 
  // discount price of product
  let price = 20 - 2
  // do something 
  console.log('sale price', price) //returns sale price, 18
}
console.log('price', price) //returns price, 20

/* THE PLUS OPERATOR & TEMPLATE LITERALS
The + operator can be used on string variables. If one of the variables is a string and the other is not, the + operator converts the 
other variable to a string and concatenates the 2 variables. So using the + operator on integer 12 and string 12 will result in:
12 + '12'. integer 12 will be converted to string 12 and the two will be concatenated. '12'+'12' = 1212. 

The + operator technically can be used on string variables; but is not always the best solution.  In this example, will need to place an 
empty space after Hi so that the words don't run together. You can sometimes forget to place a space, especially if working with many 
string variables. An alternative approach is a template literal.

Template literals uses back-ticks and a process called string interpretlation, which 'puts in' the variable value in the string. Can also 
use template literals to address strings with double and singe quotes: 

`I'm a string`;
`He said, "I am string."`;

Can also use template literals to break a statement across multiple lines. Instead of using a new line character \n or carriage return \r
"This is a string \n that spans \r across three lines."

*/
//using + operator 
let username = "Jane Doe"
let message = "Hi " + username + ", how are you?"
console.log(message) //returns Hi Jane Doe, how are you?

//using template literal
let username = "Jane Doe"
let message = `Hi ${username}, how are you?`
console.log(message) // returns Hi Jane Doe, how are you?

//using template literal to create dynamic equation (equation to convert pounds to moon)
const weight = 150
const moonWeight = `You weigh ${weight * 0.165} pounds on the moon`
console.log(moonWeight) // returns You weigh 24.75 pounds on the moon

//template literals eliminates the need for using concatenation and escaping on long strings that contain new lines. 
//just add the returns (enter key) myself to where I want the line breaks to be. This statement will print across 3 lines 
const threeLines = `This is a string 
that spans across 
three lines.
`

// Challenge: Help Darth Vader express himself to his son!
const mySon = "Luke"
const parentalStatus = "father"
const message = "mySon, I am your parentalStatus"  //returns mySon, I am your parentalStatus
console.log(message)

// Solution: Use template literals 
const message = `${mySon}, I am your ${parentalStatus}`
console.log(message)

/* VARIABLE NAMES CONVENTIONS
Variable Names are/should be:
Case Sensitive; casing matters
Self Descriptive; know what a variable holds based on its name, and have an idea of what data type variable should hold. 
Mostly all variables will use camel case convention. 
Use conventions to rely information to other developers; use is/as for booleans and all all caps for variables that do not change

Variable names are case sensitive. The following 3 name variables are different: 
const name = 'Jane';
const Name = 'Mark';
const NAME = 'Fred';

// console.log(name, Name, NAME);

Variables should also be self descriptive, clear about what data they contain and shouldn't require comments about what values they hold.
With the fullName variable, can infer that firstName and lastName are string variables and fullName will be a string as well. 

let fullName = `${firstName} ${lastName}`;

Variables should also be written in camelCase convention. 

The closer I can get code to read like a sentence or instructions to other users, the better. 

Variables that usually hold boolean values are prefixed with is or has:
let isLoading;
let hasPosition;

To inform developers that a variable should not change, use a variable with ALL CAPS' and instead of using camel case convention, 
separate words with under score:

const COLOR_RED = '#f00';
*/

//statement reads like a sentence because of variable name. if isModalVisible is true then do something. 
let isModalVisible = true
if (isModalVisible) {
  // do something  
}