// let container = require('../lib/container.js');

module.exports = {
    init(app, container){

        console.log(container);
        // route middleware to verify a token
        container.cradle.file_name(app);
    }
}
