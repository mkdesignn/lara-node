let middleware = require('./middleware.js');

module.exports = {
    init(app, container){

        // initial the middleware
        // please do not touch this part
        // you need to register your middleware into the middleware.js
        middleware.init(app, container);


        // register your routes
        app.get('/login', container.cradle.AuthController.login);


        app.get('/api/search', container.cradle.SearchController.index);
        app.get('/api/reserve', container.cradle.ReserveController.index);
        app.get('/api/book', container.cradle.BookController.index);
    }
}
