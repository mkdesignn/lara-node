let middleware = require('./middleware.js');
validate = require('express-validation');
let container = require('../lib/container.js');

module.exports = {

    init(app){

        /*
        |--------------------------------------------------------------------------
        | call the container
        |--------------------------------------------------------------------------
        |
        | we should call the container using the app express object
        |
        */
        let containers = container(app);

        /*
        |--------------------------------------------------------------------------
        | register routes
        |--------------------------------------------------------------------------
        |
        | we should call the container using the app express object
        |
        */
        app.post('/login', containers.cradle.AuthController.login.bind(containers.cradle.AuthController));
        app.post('/api/search', containers.cradle.SearchController.index.bind(containers.cradle.SearchController));
        // app.get('/api/reserve', container.cradle.ReserveController.index);
        // app.get('/api/book', container.cradle.BookController.index);


        /*
        |--------------------------------------------------------------------------
        | Initial the middleware
        |--------------------------------------------------------------------------
        |
        | we Bootstrap the middleware for registering other middlewares
        |
        */
        middleware.bootstrap(app, containers);
    }
}
