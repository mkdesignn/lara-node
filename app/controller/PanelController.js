let base = require('./BaseController.js'),
    user = (new (require('./../model/User'))).boot();
module.exports = class PanelController {

    constructor(User){
        user.findOne().then(user => {
            console.log(user.get('firstname'));
        });
    }


    index(req, res){

        user.findOne().then(user => {
            console.log(user.get('firstname'));
            res.send(user.get('firstname'));
        });
    }

    create(req, res){
        return res.send("we are in the middleware");
    }
}
