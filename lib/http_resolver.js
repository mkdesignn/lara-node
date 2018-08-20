let validate = require('express-validation');
let panel_validation = require('./../app/validation/panel');

module.exports = class resolver{

    constructor(app){
        this.app = app;
    }

    get(url, handler, validation){
      return this.resolve(url, handler, 'get', validation)
    }

    post(url, handler, validation){
      return this.resolve(url, handler, 'post', validation)
    }

    resolve(url, handler, type, validation){

        let split_handler = handler.split("@"),
            controller = split_handler[0],
            method = split_handler[1];

        let class_controller = require('../app/controller/'+controller+'.js');
        let obj = new class_controller();

        
        if(validation != undefined)
            return this.app[type](url, validate(panel_validation), obj[method]);
        else
            return this.app[type](url, obj[method]);
    }
}
