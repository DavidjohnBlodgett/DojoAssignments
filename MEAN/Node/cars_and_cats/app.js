var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
    console.log('client request URL: ', req.url);
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Hello world!!!');
        res.end();
    }
    else if(req.url === '/cars'){
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(contents);
            res.end();
        });
    }
    else if(req.url === '/cats'){
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(contents);
            res.end();
        });
    }
    else if(req.url === '/cars/car1.jpg'){
        fs.readFile('images/car1.jpg', function(errors, contents){
            console.log(typeof(contents));
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(contents);
            res.end();
        });
    }
    else if(req.url === '/cars/car2.jpg'){
        fs.readFile('images/car2.jpg', function(errors, contents){
            console.log(typeof(contents));
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(contents);
            res.end();
        });
    }
    else if(req.url === '/cars/car3.jpg'){
        fs.readFile('images/car3.jpg', function(errors, contents){
            console.log(typeof(contents));
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(contents);
            res.end();
        });
    }
    else if(req.url === '/cats/cat1.jpg'){
        fs.readFile('images/cat1.jpg', function(errors, contents){
            console.log(typeof(contents));
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(contents);
            res.end();
        });
    }
    else if(req.url === '/cats/cat2.jpg'){
        fs.readFile('images/cat2.jpg', function(errors, contents){
            console.log(typeof(contents));
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(contents);
            res.end();
        });
    }
    else if(req.url === '/cats/cat3.jpg'){
        fs.readFile('images/cat3.jpg', function(errors, contents){
            console.log(typeof(contents));
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(contents);
            res.end();
        });
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('Error!');
        res.end();
    }
});

server.listen(7077);
console.log("Running in localhost at port 7077");
