const awilix = require('awilix');
const fs = require('fs');

module.exports = function init(app, listening_app){
    const container = awilix.createContainer();

    container.loadModules([
            './app/model/*.js',
            './app/controller/*.js',
            './app/middleware/*.js',
            './app/commands/*.js',
            './app/validation/*.js'
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
        app: awilix.asValue(app),

        listening_app: awilix.asValue(listening_app)
    })

    return container;
}