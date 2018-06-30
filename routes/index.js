const express = require('express');
const router = express.Router();

router.route('/').get(function(req,res,next){
res.send('home apge')
});

module.exports = router;
