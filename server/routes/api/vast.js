var express = require('express')
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "root",
   database: "vastschema"
});

router.get('/getVast', function (req, res, next) {
    	con.query('SELECT * FROM vasts',
		function(err, rows) {
			if(err) throw err;
            res.json(rows); 
		})
});

router.post('/addVast', function (req, res, next) {
    console.log(req.body.url)
        con.query(`insert into vasts
                    (vast_url, position, hide_ui) values 
                    ('${req.body.url}', '${req.body.position ||'bottom_right'}', '${req.body.hide_ui || '0'}');`,
		function(err, rows) {
			if(err) throw err;
            res.json(rows); 
        })
    console.log("postTrauma")
        
});

module.exports = router;