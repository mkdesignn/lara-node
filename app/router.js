let http = require('../lib/http_resolver.js');
let middleware = require('./middleware.js');
let bodyParser = require('body-parser');
let panel_validation = require('./validation/panel');

module.exports = {
    init(app, objects = this.methods){

        // initial the middleware
        middleware.init(app);

        // make response objective
        app.use(bodyParser.json());


        // initial the routes
        // panel
        http.resolve('/panel', 'panel@index', 'get', app, panel_validation);
        http.resolve('/panel/create', 'panel@create', 'get', app);

        // home
        http.resolve('/', 'auth@login', 'get', app);

        // authenticated
        // http.resolve('/authenticate', 'auth@login', 'get', app);

    }
}
