const http = new EasyHttp;

//  synchronous way
//  const res = http.get('https://jsonplaceholder.typicode.com/users');

// console.log(res); yields undefined because we are using asynchrouns code synchronously. to handle assynchronous code of fetch we will use promises which has been done in easyhttp2 and we will use it below.

// Asynchronous HTTP GET Method
// http.get('https://jsonplaceholder.typicode.com/users') // here get method returns a promise. if promise is resolve then part will be called and if not then the catch part will be called.
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// customised data for posting 
const data = {
  name : 'John Doe',
  username : 'johndoe',
  email : 'jdoe@gmail.com'
}

// // Asynchronous HTTP POST method
// http.post('https://jsonplaceholder.typicode.com/users', data) // here post method returns a promise. if promise is resolve then part will be called and if not then the catch part will be called.
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// // Asynchronous HTTP PUT method
// http.put('https://jsonplaceholder.typicode.com/users/2', data) // here put method returns a promise. if promise is resolve then part will be called and if not then the catch part will be called.
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Asynchronous HTTP DELETE method
http.delete('https://jsonplaceholder.typicode.com/users/2') // here delete method returns a promise. if promise is resolve then part will be called and if not then the catch part will be called.
  .then(data => console.log(data))
  .catch(err => console.log(err));