// this program is for library that we are gonna build.
// ES5 object oriented library.

// constructor
function easyHTTP(){
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET request. without using callback
// easyHTTP.prototype.get = function(url){
//   this.http.open('GET',url,true);

//   // using self variable to denote this in the inner scopes
//   let self = this;
//   this.http.onload = function(){
//     // if(this.http.status === 200){
//     //   console.log(this.http.responseText);
//     // } won't work because this is not defined inside the function scope. In this situation we can either use arrow function which we will see latter or we can use this by defining another variable as this for example self as defined above and then we can use self.

//     if(self.http.status === 200){
//         // console.log(self.http.responseText);
//         return self.http.responseText;
//       }
//   }

//   this.http.send();
// }


// using callback method
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET',url,true);

  // using self variable to denote this in the inner scopes
  let self = this;
  this.http.onload = function(){
    // if(this.http.status === 200){
    //   console.log(this.http.responseText);
    // } won't work because this is not defined inside the function scope. In this situation we can either use arrow function which we will see latter or we can use this by defining another variable as this for example self as defined above and then we can use self.

    if(self.http.status === 200){
        // console.log(self.http.responseText);
        callback(null, self.http.responseText); //instead of returning we process the returned data using callback function.
      }else{
        callback('ERROR:' + self.http.status);
      }
  }

  this.http.send();
}


// Make an HTTP POST request.

// post method will take three arguments. url same as get, data represents the data that we want to post and callback is to handle asynchronous code.
easyHTTP.prototype.post = function(url, data, callback){
  this.http.open('POST',url,true);

  // set the content type
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}


// Make an HTTP PUT request.
// similar to post
easyHTTP.prototype.put = function(url, data, callback){
  this.http.open('PUT',url,true);

  // set the content type
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE request.
easyHTTP.prototype.delete = function(url, callback){
  this.http.open('DELETE',url,true);

  // using self variable to denote this in the inner scopes
  let self = this;
  this.http.onload = function(){
    // if(this.http.status === 200){
    //   console.log(this.http.responseText);
    // } won't work because this is not defined inside the function scope. In this situation we can either use arrow function which we will see latter or we can use this by defining another variable as this for example self as defined above and then we can use self.

    if(self.http.status === 200){
        // console.log(self.http.responseText);
        callback(null, 'Post Deleted'); //instead of returning we process the returned data using callback function.
      }else{
        callback('ERROR:' + self.http.status);
      }
  }

  this.http.send();
}
