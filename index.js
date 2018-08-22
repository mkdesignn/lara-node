let express = require('express');
let router = require('./app/router');
let parseRequest = require("./lib/parseRequest.js");
let container = require('./lib/container.js');

let app = express();

process.env = require('./env.js');

router.init(parseRequest.init(app), container(app));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
