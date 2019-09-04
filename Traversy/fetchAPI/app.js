document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// get local text data
function getText(){
  // Here we will work with fetch api instead of classical XHR object.
  // To work with fetch api and get something from resource we simply call fetch method.
  fetch('test.txt') //simply takes the url of the data location
    .then(function(res){ // fetch returns a promise object. So we use then method
      return res.text(); //Now the returned promise object has many properties which we can look in dev tools. .text is one of them which is used with text file
    })
    .then(function(data){ //res.text() returns promise object so whole code before this line became a promise object so we use then method again.
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
    });
    
}

// get local json data
function getJson(){
  fetch('posts.json') //simply takes the url of the data location
    .then(function(res){ // fetch returns a promise object. So we use then method
      return res.json(); //Now the returned promise object has many properties which we can look in dev tools. .json is one of them which is used with text file
    })
    .then(function(data){ //res.text() returns promise object so whole code before this line became a promise object so we use then method again.
      console.log(data);
      let output  = '';
      data.forEach(function(post){
        output+=`<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
    
}

// get from external API
function getExternal(){
  fetch('https://api.github.com/users') //simply takes the url of the data location
    .then(function(res){ // fetch returns a promise object. So we use then method
      return res.json(); //Now the returned promise object has many properties which we can look in dev tools. .json is one of them which is used with text file
    })
    .then(function(data){ //res.text() returns promise object so whole code before this line became a promise object so we use then method again.
      console.log(data);
      let output  = '';
      data.forEach(function(user){
        output+=`<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
    
}