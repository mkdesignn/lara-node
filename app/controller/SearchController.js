let base = require('./BaseController.js');

module.exports = class SearchController {

    constructor(){
        
    }


    index(req, res){
        // user.findOne().then(user => {
        //     console.log(user.get('firstname'));
        //     res.send(user.get('firstname'));
        // });
    }

    create(req, res){
        return res.send("we are in the middleware");
    }
}
