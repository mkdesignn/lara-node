const Sequelize = require('sequelize');
let env = require("../../env");

module.exports = new Sequelize(env.database.mysql.database_name, env.database.mysql.username, env.database.mysql.password, {
    host: env.database.mysql.host,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    // SQLite only
    storage: 'path/to/database.sqlite'
});

