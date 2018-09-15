let express = require('express');
let routes = require('./app/router');
let parseRequest = require("./lib/parseRequest.js");
let app = express();
process.env = require('./env.js');

routes.init(parseRequest.init(app));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
