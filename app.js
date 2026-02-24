const http = require("http");const host = 'localhost';const port = 3000;const requestListener = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'}); // Set HTTP status code and header
  res.end("Hello World!"); // Send the response body and close the connection
};const server = http.createServer(requestListener);server.listen(port, host, () => {
  console.log(Server is running on http://host:3000/);
});