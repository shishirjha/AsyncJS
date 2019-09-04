// This is the verson 2 of easyhttp library which will use fetch api instead of older xhr object. And also it will use new es6 class style. and also we will be using arrow functions to make it clean.

class EasyHttp{
  // first we will do it without promises that is synchronously then we will see asynchrnous way to do it.
  // Make an http get request.
  // get(url){
  //   fetch(url) // fetch returns a promise object so we use then below
  //     .then(res => res.json()) //res.json() also returns promise hence then again
  //     .then(data => data)
  //     .catch(err => err); // to catch error if any
  // }

  // to do whole process asynchronously, we will wrap above fetch request with a promise as shown below.
  get(url){

    return new Promise((resolve,reject)=>{
      fetch(url)
      .then(res => res.json()) 
      .then(data => resolve(data)) //instead of returning data we use reolve data so that if only the promise was resolved do this.
      .catch(err => reject(err)); 
    });
    
  }

  // post. almost similar to get but here we need some data that we will post.
  post(url, data){ //here data is the data which we will post and take as an argument in the post function.

    return new Promise((resolve,reject)=>{
      // in case of post fetch method takes second argument as the object with following specifications.
      fetch(url, {
        method : 'POST', //corresponding to xhr's open's first arg
        headers: {
          'Content-type' : 'application/json' //corresponding to xhr's post method's setHeader method
        },
        body : JSON.stringify(data) //correspding to xhr's send's arguments in post method.
      })
      .then(res => res.json()) 
      .then(data => resolve(data)) //instead of returning data we use reolve data so that if only the promise was resolved do this.
      .catch(err => reject(err)); 
    });
    
  }

  // make an http PUT request.
  put(url, data){ //here data is the data which we will post and take as an argument in the post function.

    return new Promise((resolve,reject)=>{
      // in case of post fetch method takes second argument as the object with following specifications.
      fetch(url, {
        method : 'PUT', //corresponding to xhr's open's first arg
        headers: {
          'Content-type' : 'application/json' //corresponding to xhr's post method's setHeader method
        },
        body : JSON.stringify(data) //correspding to xhr's send's arguments in post method.
      })
      .then(res => res.json()) 
      .then(data => resolve(data)) //instead of returning data we use reolve data so that if only the promise was resolved do this.
      .catch(err => reject(err)); 
    });
    
  }

  // make an http DELETE request.
  delete(url){ //dont need data in case of delete.

    return new Promise((resolve,reject)=>{
      fetch(url, {
        method : 'DELETE', //corresponding to xhr's open's first arg
        headers: {
          'Content-type' : 'application/json' //corresponding to xhr's post method's setHeader method
        },
      })
      .then(res => res.json()) 
      .then(() => resolve("data deleted...")) //instead of returning data through resolve we just return this message
      .catch(err => reject(err)); 
    });
    
  }
  
}