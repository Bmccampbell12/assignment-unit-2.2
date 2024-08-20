// WHAT IS THIS EVEN DOING?
// The double forward slashes indicate that a note has been made within the code.
// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. Using a string comparison operator we see if a name is 'Dane' we get 'Hi, Mary' otherwise 'How do you do?'
// First we make a variable and set it to 'name' and set it to the string 'Dane'.
// We then condition that if the string 'Mary' is equal in value AND type, we console log 'Hi, Mary!'
// If the condition of 'Mary' is NOT equal in value AND type, we then instruct the console to log 'How do you do?'
// The operation will run and verify that 'Dane' is not of the same value and type,
// Therefore it will move to the ELSE console log which will read:
// - How do you do?

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. We are assigning variables, then comparing value and type, when conditions are met, console logs 'super'
// The variable 'secret' is being declared first but not assigned.
// The variable 'code' is being declared and assigned the number value 123.
// If the condition that the variable 'code' is of the same value and type as number '123',
// Then assign the variable 'secret' to 'super' and variable 'code' to (123 * 2)
// However if the condition of 'code' being the same type and value to '123' is not met,
// The code will then run to see if the variable 'code' is larger than the number 250, if so,
// The variable secret will then be assigned the string 'duper'
// The consol log will read: super

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. variables are initially being assigned values with 'let', conditions are run one at a time, if the first is met it will console log `You're a student on the West Coast!` otherwise 
// it will move on to the next condition with 'else if' comparing 'true' and 'false' or 34 < 30, which triggers it to the next 'else if'
// comparing what is now true = true, meaning the console will log 'Welcome to Prime!'
// There is a final else, if the previous conditions could not be met, it would console log 'How about the weather?'
// The console will log 'Welcome to Prime!' 
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/

// Variables declared with 'let' cannot be redeclared.
// use var instead of let for the first two declarations. 

//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'blue';
let colorTwo = 'red';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';

  consol.log(colorOne);
  consol.log(colorTwo);
}
*/



//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*/// when declaring the cariable of time, 'let' should be used instead of 'const' as these cannot be reassigned. 

let temp = 40;
let time = 4;

if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.
//* minAge is a constant and cannot be redeclared. variables age and minAge should be switched aroundb so that if 'age' is less than or equal to 21 or minAge. 
/*

let age = 21;
const minAge = 21;

if(age <= minAge) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

