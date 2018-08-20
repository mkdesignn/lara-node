let http = require('../lib/http_resolver.js');
let middleware = require('./middleware.js');
let bodyParser = require('body-parser');
let panel_validation = require('./validation/panel');
let container = require('../lib/container.js');

module.exports = {
    init(app, objects = this.methods){

        // make response objective
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        // initial the middleware
        middleware.init(app, container);

        // search
        app.get('/api/search', container.cradle.panelController.index);

        // auth
        app.get('/login', container.cradle.authController.login);

    }
}
