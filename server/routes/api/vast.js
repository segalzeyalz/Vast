var express = require('express')
var router = express.Router();var xml = require('xml');
var xml = require('xml');

const vastService = require('../../services/vast.service');

router.get('/fetch_vast', function (req, res, next) {
    //get id of vast
    let { id } = req.query;
    if (id == parseInt(id)){
        vastService.getVastUrlById(id).then((data) => {
            res.json(data);
        }).catch((err) => {res.send(err);
        })
    }else{
            res.send("Must use integer");
        }
    });

router.post('/create_vast', function (req, res, next) {
    let {vastURL, position, hideUI} = req.body;
    position=position? position:`bottom_right`
    hideUI=hideUI? hideUI:0
    vastService.createVast(vastURL, position, hideUI).then((data) => {
        res.json(data);
      }).catch((err) => {
        res.json(err);
      });
});

module.exports = router;