 var http=require('http');
http.createServer(function(request,response){

    response.write('<h1> Hello Everyone</h1>');
    response.write('<h4>This is a Node.JS class</h4>');
    response.end('<h2>Hello Students</h2>');
}).listen('8080'); 