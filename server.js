var tty = require('tty.js');

var username = process.env['USERNAME'] || 'linker';
var password = process.env['PASSWORD'] || 'notasecret';
var user = {};
user[username] = password;

var app = tty.createServer({
	  shell: 'bash',
	  users: user,
	  port: process.env['PORT'] || 8000
});

app.listen();
