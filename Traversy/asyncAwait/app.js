// function myFunc(){
//   return 'Hello';
// }

// console.log(myFunc());

// above was an example of simple function. Now we will see two terms "async" and "await"

// async function myFunc()
// {
//   return 'Hello';
// }

// // console.log(myFunc());
// myFunc().then(res => console.log(res));

// so what we observe from above is that just adding async ahead of a function makes it return a promise object and then we can use then and catch methods with it as shown above.

// Now await can be used with async to handle asynchronous code. as shown below

// async function myFunc()
// {
//   const promise = new Promise((resolve,reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });
//   // first check without any error
//    // const res = await promise; // here res will wait until the promise will be resolved 
//   // return res; //and then the result will be returned.

//   // with error
//   const error = true;

//   if(!error){
//     await Promise.reject(new Error('something went wrong'));
//   }else{
//     const res = await promise; // here res will wait until the promise will be resolved 
//   return res; //and then the result will be returned.
//   }
// }

// myFunc().then(res => console.log(res))
//         .catch(err => console.log(err));

// more neater and relevant example of async/await

async function getUsers(){
  // await response of the fetch call
  const response =  await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed when its resolved.
  const data = await response.json();

  // only proceed when second promise is resolved.

  return data;
}

getUsers().then(users => console.log(users));
// here the data was resolved only when the promise was resolved so, await and async make it more cleaner.


// Async and await are the part of newer standard so while using it in production we may want to compile it to be compatible with older technologies. we are going to see how to do that with webpack and babel latter.