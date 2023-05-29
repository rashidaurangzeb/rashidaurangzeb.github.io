const http = require('http');

const server = http.createServer((request, response) => {
	response.write('This is just a test app for k8 practice\n');
	response.end();
});

server.listen(9090, () => {
	console.log('Server is ready...');
});