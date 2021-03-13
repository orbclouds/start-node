// This example is taken from the Node.js HTTP server tutorial:
// https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/

// Import the http module.
// https://nodejs.org/api/http.html
const http = require('http');

// Destructure the PORT environment variable.
// This is defined in the "start" script in "package.json".
// i.e. PORT=8000 node index.js
const { PORT } = process.env;

// Define a function that handles HTTP requests:
// Takes a Request object and a Response object as inputs.
// For all requests, send "Hello, World!" in the response body
// as a text response with status code 200.
const requestListener = (req, res) => {
  // Log the request.
  console.log('A request was received at', new Date());

  // Set Content-Type response header.
  res.setHeader('Content-Type', 'text/plain');

  // Set status code.
  res.writeHead(200);

  // Set response body and end connection.
  res.end('Hello, World!');
}

// Create a server instance.
const server = http.createServer(requestListener);

// Bind the server to a port and log that the server is live.
server.listen(PORT, () => {
  console.log('Live on PORT', PORT);
});
