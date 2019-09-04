document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  // To send an HTTP request, create an XMLHttpRequest object, open a URL, and send the request.
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open("GET","data.txt",true);

  // previously there used to be method onreadystatechange method which was used in place of onload as used here but that method gets fired every time the state changes as opposed to onload  so while using onreadystatechange method we would have to use one more boolean whether ready state has reached 4, which is donw in net ninja code.
  // But with onload it is not required as when onload is called, ready state is always at 4 which indicates request is processed and response is ready.

  // optional method onprogress- may be used for spinners and loaders.

  xhr.onprogress = function()
  {
    console.log('READYSTATE',this.readyState);
  }

  // onload is called when an xhr transaction completes sucesfully. that is when ready state is 4
  xhr.onload = function(){
    if(this.status === 200){
      console.log(this.responseText);
      // To actually use the retrieved data we can do something like the following
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // In case something goes wrong.

  xhr.onerror = function(){
    console.log("error occured....");
  }
  // send
  xhr.send();
}

// // HTTP statuses
// 200 -- Ok
// 403 -- "forbidden"
// 404 -- 'Not found'

// readystate values
// 0: request not initialised
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready