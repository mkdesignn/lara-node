let base = require('./BaseController.js'),
    user = (new (require('./../model/User'))).boot();
module.exports = class PanelController {

    constructor(User){
        this.User = User;
    }


    index(req, res){

        this.User.findOne().then(user => {
            console.log(user.get('firstname'));
            res.send(user.get('firstname'));
        });
    }

    create(req, res){
        return res.send("we are in the middleware");
    }
}
