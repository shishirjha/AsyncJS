window.onload = function(){

  // Example of synchronous callback method
  // var fruits = ["banana", "apple", "pear", ];
  // // here function inside the forEach method is the callback function. We could have named it and defined it in diff. place and placed just its name as the second argument 
  // fruits.forEach(function(fruit){
  //   console.log(fruit);
  // });

  // Now asynchronous callback method using jquery.
  // Inline callback
  // $.get("data/tweets.json", function(data){
  //   console.log(data);
  // });

  // different way to use callback: first define it in advance and then use its name only as argument
  function cb(data){
    console.log(data);
  }
  $.get("data/tweets.json", cb);
  console.log("test");
};