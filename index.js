var http = require("http");
var url = require('url');

var users = [];

http
    .createServer(function (req, res) {

        let parsedUrl = url.parse(req.url, true);
        let query = parsedUrl.query;

        if (query.login) {
            users.push({
                'login': query.login,
                'password': query.password ? query.password : ''
            });
        }

        console.log(users);
        res.writeHead(200, {'Content-Type': 'text/html'});

        res.write('<strong>All users:</strong> <br/>');

        users.forEach(function (user) {
            res.write('Login: ' + user.login + '<br/>');
        });

        res.end();
    })
    .listen(8080);