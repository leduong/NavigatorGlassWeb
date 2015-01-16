var Express = require("express");
var port = process.env.PORT || 3000;
var app = Express();

function cors(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, AUTH');

    next();
};

global.base = __dirname;
app.use(cors);
app.use("/", Express.static(__dirname + "/dist"));

var http = require('http');

app.listen(port);
console.log("Started on port", port);
