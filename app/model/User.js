var sequelize = require('./../config/database.js');
const Sequelize = require('sequelize');
module.exports = class User{

    boot(){
        return sequelize.define('user', {
            "firstname": {
                type: Sequelize.STRING
            },
            "lastname": {
                type: Sequelize.STRING
            }
        },
            {
                timestamps: false
            }
        );
    }
}

// let user = new User();
// module.exports = user.init();