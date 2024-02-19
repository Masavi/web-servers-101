// Initial setup
const http = require('http');
const PORT = 3000;

const server = http.createServer();

// Configure behaviour of the server
server.on('request', (request, response) => {
  console.log('Request method:', request.method)
  console.log('Request URL:', request.url);

  if (request.method === 'GET' && request.url === '/') {
    response.write('Welcome to my website! 🥎');
  } else if (request.method === 'GET' && request.url === '/dogs') {
    response.write('There should be dogs here...');
  } else {
    response.write('404. Nothing to see here...');
  }

  response.end();
})

// START LISTENING
server.listen(PORT, () => { console.log('Server is listening!') });

