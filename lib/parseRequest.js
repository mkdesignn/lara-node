let bodyParser = require('body-parser');

module.exports = {
    init(app){
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        return app;
    }
}
