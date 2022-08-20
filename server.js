const http = require('http');

const port = 8081; //port number

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'}); //Response send back will be of html form, 200 is the the code for request is successful 200 means OK
    response.write("<h1> Hello, This is from my server </h1>") //conetnt to be displayed
    response.end(); //close or end the response
})
.listen(port, () =>{   //where you want your application to start
    console.log(`Node.js serer started on port ${port}`);
});

// http://localhost:8081  //copy it in browser to open the server