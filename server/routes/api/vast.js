var express = require('express')
var router = express.Router();

router.get('/getVast', function (req, res) {
    res.send('Okay');
});

module.exports = router;