var express = require('express')
var router = express.Router();
const vastService = require('../../services/vast.service');

router.get('/fetch_vast', function (req, res, next) {
    //get id of vast
    let { id } = req.query;
    vastService.getVastUrlById(id).then((data) => {
        console.log(data);
        res.json(data);
      })
    });

router.post('/addVast', function (req, res, next) {
        
});

module.exports = router;