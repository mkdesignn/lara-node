var ev = require('express-validation');
/*
|--------------------------------------------------------------------------
| Register Middleware
|--------------------------------------------------------------------------
|
| Here is where you can register Middleware for your application.
|
|
*/

module.exports = {
    bootstrap(app, container){
        for(var i in this.bootMiddleware){
            app.use(this.bootMiddleware[i], container.resolve(i));
        }
    },
    bootMiddleware: {
        'jwt': '/api'
    }
}
