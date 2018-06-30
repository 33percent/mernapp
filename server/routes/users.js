const express = require('express');
const router = express.Router();
const Users = require('../controllers/users.js');

router.route('/').get(function(req,res,next){
    console.log(';ajsdasjdajdajsdjasj')
      Users.listUsers(req,res);
})

module.exports = router;