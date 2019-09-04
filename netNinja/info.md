Asynchronous code can start something now and finish it later.
For example lets say we use youtube api to grab some data from youtube and do some operation with that data.
For that to work we need to wait while the data is fetched as javascript code runs on a single thread(can do 1 thing at a time.). This is the synchronous js which is the default behavior of a js code. Synchronous code waits for 1 action to complete before moving on to the next.
e.g
    var article = readSync(article_loc);
    console.log(article);
    var authors = readSync(authors_loc);
    console.log(authors);

This seems to cause no problems as long as our connection is very fast and the data to be fetched is small. But what about when we have to request huge amount of data in a slow network?In that case, the code will have to wait for a long time to work with data. Thats where asynchronous programming comes in.
e.g.
   var article = readAsync(article_loc);
    console.log(article);
    var authors = readAsync(authors_loc);
    console.log(authors);
What is happening in above code is that once the readAsync method is called that is passed into a separate thread where all the fetching and retrieving of data occurs. And our program doesnot wait for the async function to be finished, it moves on while the data is being fetched.

There are basically three ways for async flow control
1. callbacks-good
2. Promises-better
3. Generators- awesome

We are going to see these in the code.

AJAX Requests:
Communicate with a server by making a http request.
No need to reload the page.
Stands for:
Asynchronous JavaScript and XML


Javascript Promises:
Promises help us to organise callbacks in a more systematic manner.
Promises represen
