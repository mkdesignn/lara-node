const awilix = require('awilix');
const fs = require('fs');

// Create the container and set the injectionMode to PROXY (which is also the default).
// const container = awilix.createContainer({
//   injectionMode: awilix.InjectionMode.PROXY
// });

// container.register({
//     // Here we are telling Awilix how to resolve a
//     // userController: by instantiating a class.
//     panelController: awilix.asClass(panelController),
//     authController:  awilix.asClass(authController),
//     baseController:  awilix.asClass(baseController),
//     User: awilix.asClass(userModel)
// });

// register middleware
// async function test(param){
//     await fs.readdir("./app/middleware/", (err, files) => {
//         files.forEach(file => {
//             var file_name   = file.split(".")[0],
//                 method_name = require("../app/middleware/"+file);
//             container.register({file_name: awilix.asFunction(method_name)});
//
//         });
//
//         param(container);
//     });
// }

module.exports = function init(app){
    const container = awilix.createContainer();

// Load our modules!
    container.loadModules([
            './app/model/*.js',
            './app/controller/*.js',
            './app/middleware/*.js'
        ], {
            // We want to register `UserService` as `userService` -
            // by default loaded modules are registered with the
            // name of the file (minus the extension)
            // formatName: 'camelCase',
            // Apply resolver options to all modules.
            resolverOptions: {

                injectionMode: awilix.InjectionMode.CLASSIC,

                // We can give these auto-loaded modules
                // the deal of a lifetime! (see what I did there?)
                // By default it's `TRANSIENT`.
                lifetime: awilix.Lifetime.SINGLETON,
                // We can tell Awilix what to register everything as,
                // instead of guessing. If omitted, will inspect the
                // module to determinw what to register as.
                register: awilix.asClass
            }
        }
    )

    container.register({
        // the `userService` is resolved by
        // invoking the function.
        app: awilix.asValue(app)
    })

    return container;
}





// container.resolve("panelController").test();
