const awilix = require('awilix');
let panelController = require("../app/controller/panel.js");
let authController = require("../app/controller/auth.js");
let baseController = require("../app/controller/base.js");
let userModel = require("../app/model/user.js");
const fs = require('fs');


// Create the container and set the injectionMode to PROXY (which is also the default).
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
});

render = {
    init: function(){
        container.register({
            // Here we are telling Awilix how to resolve a
            // userController: by instantiating a class.
            panelController: awilix.asClass(panelController),
            authController:  awilix.asClass(authController),
            baseController:  awilix.asClass(baseController),
            User: awilix.asClass(userModel)
        });

        fs.readdir("./app/middleware/", (err, files) => {
            files.forEach(file => {
                var file_name = file.split(".")[0],
                    method_name = require("../app/middleware/"+file);
                container.register({file_name: awilix.asFunction(method_name)});
                console.log("im cool");
                // console.log(container.cradle.file_name());
            });
        })
    }
}


module.exports = container;
// container.resolve("panelController").test();
