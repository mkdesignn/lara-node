let base = require('./BaseController.js');

module.exports = class SearchController {

    index(req, res){

    }

    create(req, res){
        return res.send("we are in the middleware");
    }
}
