let jwt  = require('jsonwebtoken');
let validate = require('express-validation');
let panel_validation = require('./validation/panel');

module.exports = {
    init(app){

        // route middleware to verify a token
        app.use('/panel', validate(panel_validation), function(err, req, res, next) {

            if (err instanceof validate.ValidationError) return res.status(err.status).json(err);

            // check header or url parameters or post parameters for token
            var token = req.body.token || req.query.token || req.headers['x-access-token'];

            // decode token
            if (token) {

                // verifies secret and checks exp
                jwt.verify(token, process.env.jwt_secret, function(err, decoded) {
                    if (err) {
                        return res.json({ success: false, message: 'Failed to authenticate token.' });
                    } else {
                        // if everything is good, save to request for use in other routes
                        req.decoded = decoded;
                        next();
                    }
                });

            } else {

                // if there is no token
                // return an error
                return res.status(403).send({
                    success: false,
                    message: 'No token provided.'
                });

            }
        });

    }
}
