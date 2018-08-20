let base = require('./base.js'),
    user = (new (require('./../model/User'))).boot();
module.exports = class panel {

    constructor(opt){
        console.log(opt.User);
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
