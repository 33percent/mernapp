let usersSchema = require('../schemas/users');

class Users {

    constructor(){
        this.model = usersSchema;
    }
    async show(req, res){
        return await this.model.find();
    }
}

module.exports = Users;