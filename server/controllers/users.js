const user = require('../models/users');
const userModel = new user();

class Users {

    async listUsers(req, res){

        try {

            let userlist = await userModel.show(req, res);
            res.json({
                "status" : "success",
                "response" : {
                    "data" : userlist
                }
            })
            res.end();

        } catch(error){

            res.json({
                "status" : "error",
                "response" : {
                    "message" : "Something Error"
                }
            })
            res.end();
        }

    }
}

module.exports = Users;