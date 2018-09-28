let middleware = require('./middleware.js');
validate = require('express-validation');
let container = require('../lib/container.js');
let express = require('express');

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
        app.post('/home', containers.cradle.HomeController.index.bind(containers.cradle.HomeController));


        /*
        |--------------------------------------------------------------------------
        | Initial the middleware
        |--------------------------------------------------------------------------
        |
        | we Bootstrap the middleware for registering other middlewares
        |
        */
        middleware.bootstrap(app, containers);

        /*
        |--------------------------------------------------------------------------
        | Serving Static files
        |--------------------------------------------------------------------------
        |
        | we wil serve static files
        |
        */
        app.use(express.static('public'))
    }
}
