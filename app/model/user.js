const sequelize = require("../config/database.js")
const Sequelize = require('sequelize');


module.exports = function User(){
    return sequelize.define('user', {
        name: Sequelize.STRING,
        lastname: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING
    }, {});
} 