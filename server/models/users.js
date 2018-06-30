let usersmodel = require('../models/users');

class Users {

    constructor(){
        this.model = usersmodel;
    }

    async show(req, res){
        return await this.model.find();
    }

}

module.exports = Users;