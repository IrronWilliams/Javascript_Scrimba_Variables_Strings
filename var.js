message = 'hello world'
var message = 'hello world again'  

/* There is a difference between these statements. 
running the code for message (line1) will not return an error. a value called message was created but was not created as a variable (line2)
message was added to the Global Object. The Global Object can be accessed anywhere within the application. The Global Object
is different via the environment JavaScript runs in. In the browser, reference to Global Object widow. Even though we can access message 
like its a variable, it is not a variable. It is actually a property of the Global Object. This can be concerning/confusing if I created
a variable called message. How would if I am using the property of the Global Object or the local variable? 
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

"use strict";

message = "hello world"; // because of strict mode, will immediately throw error ReferenceError: message is not defined. 

/*Normal mode allowed message to be added to the Global Object. Strict mode will prevent mutating/changing Global Object or over-riding 
existing properties on it. */
       
/*hoisting is the strange ability that JavaScript has to access a variable before its created.*/
       
"use strict";

//will behave as expected
var age = 26;
console.log(age); //returns 26

//will not behave as expected because of hoisting
console.log(age); //returns null, an empty value of a variable
var age = 26; 

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
const age = 37 //Attempting to change reassign after declaration.

best to use const to assign variables because let and var can be reassigned at anytime.  using const signals to others that variables 
should not be changed at anytime. Const allows variables to be less unpredictable and not subject to change. const works best with 
primitive data types, numbers, strings, booleans. const does have vulnerability when working with non primitive data types like objects.

const originalPrice = 50;
const percentOff = 20;
const salePrice = originalPrice * (percentOff / 100);

let salePrice = originalPrice * (percentOff / 100); //if need to reassign a variables value, switch from const to let


console.log(salePrice);
*/

'use strict';
var age //variable declaration w/o 
console.log(age) //undefined 
age = 26  //assigning value 

//using let
console.log(age); //ReferenceError: Cannot access 'age' before initialization
let age = 26;

//using const
console.log(age); //ReferenceError: Cannot access 'age' before initialization
const age = 26;


'use strict';

// Challenge 1: We want to log out the name "Reed", but it doesn't work. Can you fix it?
const name;
name = "Reed";
console.log(name);

//Solution/Explanation. This is a constant variable and constant variables need to be declared and initialized at same time. 
const name = "Reed";
console.log(name);

// Challenge 2: We want 102 to be logged out. But we're getting an error instead. Try to fix it!
const count = 100;
count = 101;
count = 102;
console.log(count);

//Solution/Explanation. Constant variables changed. But let variable can be changed at different points of the program. 
//when const variable is declared.  
let count = 100;
count = 101;
count = 102;
console.log(count);

//  Challenge 3: We want to log out the price (50), but it doesn't work. Can you fix it?
let price;
console.log(price);
price = 50;

//Solution/Explanation. Problem here is that we are declaring value, logging it out and then initializing it. Move initializing 
//statement above console.log function
let price;
price = 50;
console.log(price);

