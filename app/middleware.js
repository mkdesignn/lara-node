
/*
|--------------------------------------------------------------------------
| Register Middleware
|--------------------------------------------------------------------------
|
| Here is where you can register Middlewares for your application.
|
|
*/

module.exports = {
    init(app, container){
        this.bootMiddleware.forEach((elem) => {
            container.resolve(elem);
        })
    },
    bootMiddleware: [
        'jwt'
    ]
}
