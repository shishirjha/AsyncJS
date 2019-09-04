// This is the version 3 of easyhttp library which will use fetch api instead of older xhr object. And also it will use new es6 class style. and also we will be using arrow functions to make it clean. in addition to these now we are going to use async await in place of promises in the library.

class EasyHttp{
  // make your method async first
  async get(url){
    const res = await fetch(url);
    const resData = await res.json();
    return resData;
  }

  // make your method async
  async post(url, data){
    const response = await fetch(url, {
      method : 'POST', 
      headers: {
        'Content-type' : 'application/json' 
      },
      body : JSON.stringify(data) 
    });
    const resData = await response.json();
    return resData;
    
  }

  // make an http PUT request.
  async put(url, data){
      const response = await fetch(url, {
        method : 'PUT', 
        headers: {
          'Content-type' : 'application/json' 
        },
        body : JSON.stringify(data) 
      });
      const resData = await response.json();
      return resData;
  }

  // make an http DELETE request. with async/await.
  async delete(url){ 
      const resoinse = await fetch(url, {
        method : 'DELETE', //corresponding to xhr's open's first arg
        headers: {
          'Content-type' : 'application/json' //corresponding to xhr's post method's setHeader method
        },
      });
      const resData = await 'Resource Deleted.'
      return resData;
    
  }
  
}