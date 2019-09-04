// forEach is a method which takes synchronous callback.setTimeout take asynchronous callback. Now we will see basics of callbacks

// following array has been created to mimic the data at some server which we will request and retrieve and display using synchronous and asynchronous callbacks
const posts =[
  {title : "Post One", body : "This is post one"},
  {title : "Post Two", body : "This is post two"}
];


// USING SYNCHRONOUS CALLBACKS

// function createPost(post){
//   setTimeout(function(){
//     posts.push(post);
//   }, 2000);
// }

// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output+= `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   },1000);
// }

// createPost({title: "Post Three", body : 'This is post three'});

// getPosts();

// SO what happens with above asynchronous method is that when we run this code , in the body of html following is displayed:

// .Post One
// .Post Two

// But we want post three also. But the title of post three did not show up because when getPosts was called the only after 1 s  its code was run but to run the code of createPosts we require 2 s so post three will never show up in above case as the code is synchronous. Now we will see asynchronous way to do it.

// USING ASYNCHRONOUS CALLBACKS..

function createPost(post , callback){ //here we introduce second parameter representing callback function.
  setTimeout(function(){
    posts.push(post);
    callback();  // and then we call that callback function within this 2 sec. Here we will put getPosts as the callback function so that we can get post three
  }, 2000);
}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output+= `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  },1000);
}

createPost({title: "Post Three", body : 'This is post three'}, getPosts); //using getPosts as a callback function.