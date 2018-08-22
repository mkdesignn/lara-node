let base = require('./BaseController.js');
let jwt  = require('jsonwebtoken');

module.exports =  class AuthController{

    constructor(User){
       this.User = User;
    }

    login(req, res){
        this.User.findOne({
            where: {
                email: req.query.email
            }
        }).then( (user) => {

            if (!user) {
                res.json({ success: false, message: 'Authentication failed. User not found.' });
            } else if (user) {

                // check if password matches
                if (user.password != req.body.password) {
                    res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                } else {

                    // if user is found and password is right
                    // create a token with only our given payload
                    // we don't want to pass in the entire user since that has the password
                    const payload = {
                        admin: user.admin
                    };
                    var token = jwt.sign(payload, process.env.jwt_secret, { expiresIn: 18000 });

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token
                    });
                }
            }
        });
    }
}
