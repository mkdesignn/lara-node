let base = require('./base.js'),
    user = (new (require('./../model/User'))).boot();
module.exports = class panel extends base{

    __constructor(){
        console.log(user);
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
