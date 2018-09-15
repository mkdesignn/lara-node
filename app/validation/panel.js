var Joi = require('joi');

module.exports = {
    body: {
        token: Joi.string().email().required()
    }
};