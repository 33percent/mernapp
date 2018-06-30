const express = require('express');
const router = express.Router();

router.route('/').get(function (req, res, next) {
    res.send('Welcome... Site is in progress')
});

module.exports = router;