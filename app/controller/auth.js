let base = require('./base.js');
let user = (new (require("./../model/User.js"))).boot();
let jwt  = require('jsonwebtoken');

module.exports =  class auth extends base{

    login(req, res){
        console.log(req.query.email);
        console.log(process.env.mode);
        user.findOne({
            where: {
                email: req.query.email
            }
        }).then( (user) => {
            console.log(user);
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
