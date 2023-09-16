const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 //hahahahahahahah
// console.log("Starting the server")
//create a server object:
http.createServer(function (req, res) {
  res.write('Yeh jo hass rahi hai duniya!'); //write a response to the client
  res.end(); //end the response
}).listen(port); //the server object listens on port 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Yeh jo hass rahi hai duniya!');
// });
 
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
