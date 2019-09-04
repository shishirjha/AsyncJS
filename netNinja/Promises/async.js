// Now we are going to see how promises work which was introduced in ES6.
window.onload = function(){
  // Here get is a simple function which takes a url and returns a promise object
  // function get(url){
  //   // at first  we return a promise object which takes a function with 2 parameters
  //   // 1. resolve: it is what happens when the promise is resolved that  is when the data retrieval is  sucess.
  //   // 2. reject: it is what happens when promise is rejected and that  is when the error happens while retrieving the data.
  //   return new Promise(function(resolve, reject){
  //     // within  promise first we have created a XHR object
  //     var xhttp = new XMLHttpRequest();
  //     // open method async
  //     xhttp.open("GET",url, true);
  //     // onload which represents if the ready state change is at ready that is our data is ready to be used.
  //     xhttp.onload = function(){
  //       // in promise  either reolution will happen or rejection will happen.
  //       if(xhttp.status === 200){
  //         // if the status is ok fire resolve. when resolve is fired, then method will be applied
  //         resolve(JSON.parse(xhttp.response));
  //       }else{
  //         // if the status is not 200 fire reject. when reject is fired , catch method will be applied.
  //         reject(xhttp.statusText);
  //       }
  //     };

  //     xhttp.onerror = function(){
  //       reject(xhttp.statusText);
  //     };

  //     xhttp.send();

  //   });
  // }

  // Now we are going to see promises.
  // Promises help  us to organize callbacks which is way easier to manage.
  // Promise is just an object which represents an action that has not finished yet.
  // promise is the placeholder for the result of some asynchronous operation like an http request.
  // Suppose we make some asynchronous request like an http request. As soon as the request is made, it returns a promise object straight after the request even before the data is processed and retrieved and returned back to us.
  // within the  promise object we can register the callback functions which will run when the request completes.
  // here we will work with promises in vanilla JS.


  // First we create a variable promise which will receive the promise object returned by the get function. so promise variable below is the actual instance of the promise object with which we can work.
  // var promise = get("data/tweets.json");
  // promise object has a then method which can be used to work with the data retrieved if our request was a sucess and then some data was returned to us. we use the data through the callback function inside then method. If the request was not sucess then we can catch the error using catch method as shown below.
//   promise.then(function(data){
//     console.log(data);
//     return get("data/friends.json");
//     // due  to this return line this whole promise.then thing becomes a promise object as it is returning a promise object. And what can we do with a promise object? we can call a then method on them which is what happening below.
//   }).then(function(friend){
//     console.log(friend);
//     return get("data/videos.json");
//     // due to this return whole thing until now again becomes a promise object on which we can again call then method as we have done below.
//   }).then(function(video){
//     console.log(video);
//   }).catch(function(eror){
//     console.log(eror);
//   });
// };

// Using jquery above can be achieved more simply and elegantly using the jquery get method as shown below:

$.get("data/tweets.json").then(function(tweets){
  console.log(tweets);
  return $.get("data/friends.json");
}).then(function(friend){
  console.log(friend);
  return $.get("data/videos.json");
}).then(function(video){
  console.log(video);
});

};