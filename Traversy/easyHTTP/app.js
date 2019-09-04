// This is the program which will test out easyHttp library.

const http = new easyHTTP;

// without using callback causes problem does not log anything to console.
// const posts = http.get('https://jsonplaceholder.typicode.com/posts');
// console.log(posts);

// As above get method is an asynchronous function above code will return undefined as when the console.log line runs the posts is being retrieved in another thread as that is how asynchronous code works and the posts has not been returned yet while the line 6 is run as it is not returned, it does not exist and what does not exist is undefined.

// So, now we are going to see the first way to handle the asynchronous code and that is with callback.


// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts',function(err, post){
//   // test for error
//   if(err){
//     console.log(err);
//   }else{
//     console.log(post);
//   }
// });


// // Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1',function(err, post){
//   // test for error
//   if(err){
//     console.log(err);
//   }else{
//     console.log(post);
//   }
// });

// Now we will be looking at post method.

// Create data to post
const data = {
  title: 'Custom Post',
  body: 'THis is a custom post.'
};

// create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(post);
//   }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(post);
//   }
// });

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err, response){
  // test for error
  if(err){
    console.log(err);
  }else{
    console.log(response);
  }
});