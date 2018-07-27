let validate = require('express-validation');
let panel_validation = require('./../app/validation/panel');

module.exports = {
    resolve(url, handler, type, app, validation){

        let split_handler = handler.split("@"),
            controller = split_handler[0],
            method = split_handler[1];

        let class_controller = require('../app/controller/'+controller+'.js');
        let obj = new class_controller();

        console.log(validation);
        if(validation != undefined)
            return app[type](url, validate(panel_validation), obj[method]);
        else
            return app[type](url, obj[method]);
    }
}
