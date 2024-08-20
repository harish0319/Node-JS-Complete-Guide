const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req.url, req.headers,req.method);
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/home') {
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
    } else if (req.url === '/about') {
        res.write('<html>');
        res.write('<head><title>About Us</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
    } else if(req.url === '/node') {
        res.write('<html>');
        res.write('<head><title>Node.js</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
    } 
    res.end();
});

server.listen(3000);