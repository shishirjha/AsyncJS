// We will see two ways to do it. first with vanilla js and then with jquery which i may revisit after learning jquery.

window.onload = function(){ // on loading the window perform this function.
  const http = new XMLHttpRequest();
  // Now this XHR object is supported in all modern browsers and is used to send http request to a server and get some data back.
  //  So how do we make request? We do  this by using the method on this above XHR object http.
  // method onreadystatechange which is fired every time the state of request is changed.
  http.onreadystatechange = function(){
    if(http.readyState === 4 && http.status === 200){
      // console.log(JSON.parse(http.response));
    }
  }
  // first method is open which specifies type of request,from where do we want data from(url) and whether the req. is sync or async.
  http.open("GET", "data/tweets.json",true);//true for async false for sync. so above method is asynchronous request.

  // Now to grab the data and bring the results to us we have send method 
  http.send();
  // console.log("Test");
  // As this code is asynchronous how above code works is that it goes to line 14 abd once the send method ar line 17 is fired the method goes to another thread to process the request that has been sent. And our program continues normally. Once the request has been processed results are returned. So, in above code, contrary to normal flow, First the text "Test" will be logged to the console then our parsed object will be printed on the console although the code corresponding to that comes first.


  // Way to make ajax request using jquery
  $.get("data/tweets.json", function(data){
    console.log(data);
  });
  // method above is similar to the open method in the vanillaJs shown above.
  // What above jquery does is that it first gives the url of the data to get method as first argument. THen a callback function is fired.
  // How this works is that first the get method says that grab the data from the given url and for that go outside this thread and do that on some other thread. Meanwhile the work will be goung on here. once the data has been fetched the call back function will be fired and it will do something with that data.
  console.log("TEst");
  // THis will also log text "TEst" to console first then the data returned by the request.
};

/* READY STATES


0 - request not initialised
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete


*/