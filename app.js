const http = require('http'); // here http is module we're importing. We already have http because nodejs ships with it.
const fs = require('fs');

function requestListener(request, response){
    // console.log(request);
    // console.log(request.url);
    if(request.url === '/'){
        response.write("<h1>Hello World!</h1>");
        response.end();
    }
    else if(request.url === '/saveUser'){
        response.write("<h1> User saved successfully. </h1>");
        let user = request.url.split('/');
        user = user[1];
        fs.writeFileSync('users.txt', user);
        response.statusCode = 302;
        response.end();
    }
    else{
        console.log(request.url);
        let message = request.url.split('/');
        message = message[1];
        response.write('<h1>' + message + '</h1>');
        response.end();
    }
    // process.exit();
}

const server = http.createServer(requestListener);

server.listen(5500);