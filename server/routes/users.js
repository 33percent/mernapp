const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const users = new usersController();


router.route('/').get(function(req,res,next){
  users.showUsers(req,res);
})

module.exports = router;