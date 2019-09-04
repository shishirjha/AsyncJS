// Regular function expression
// const sayHELLO = function() {
//   console.log("HELLO");
// }

// arrow function equivalent for sayHELLO
// const sayHELLO = () => {
//   console.log("HELLO");
// }

// one line arrow equivalent for sayHELLO.
// one line function doesnot need braces
// const sayHELLO = () => console.log("HELLO");

// one line arrow equivalent with return value.
// const sayHELLO = () => 'HELLO'
// // TO run it
// console.log(sayHELLO());

// if it was normal function we could have written
// const sayHELLO = function(){
//   return "HELLO";
// }
// // to run it
// console.log(sayHELLO());

// to return object literal with one liner arrow function
// const sayHELLO = () => ({title : "SAYHELLO"});
// console.log(sayHELLO());

// with parameters
// const sayHELLO = (name) => console.log(name);

// even paranthesis is not required with single paramter
// const sayHELLO = name => console.log(name);

// with multiple parameters paranthesis is required.
// const sayHELLO = (firstName, secondName) => console.log('Hello '+`${firstName}` +` ${secondName}`);
// sayHELLO('Shishir', 'Jha');

// Using arrow functions with callback methods/functions
const users = ['Nathan', 'Shishir','Swayamshree']

// Normal callback
// const nameLengths = users.forEach(function(name){
//   console.log(name);
// });

// arrow callback function
// const nameLengths = users.forEach((name) => {
//   console.log(name);
// });

// Shorter arrow callback function
const nameLengths = users.forEach(name => console.log(name));

