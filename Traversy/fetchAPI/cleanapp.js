// using arrow functions. to be seen after learning arrow functions.
document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

// get local text data
function getText(){
  fetch('test.txt') 
    .then(res => res.text()) //replaced with arrow function.
    .then(data => { 
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
    });
    
}

function getJson(){
  fetch('posts.json') 
    .then(res => res.json())
    .then(data => { 
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