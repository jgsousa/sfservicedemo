var express = require('express');
var router = express.Router();

var booking1 = {
    "reservation" : "BNK123",
    "lastname" : "Marto",
    "firstname" : "Cesar",
    "classe" : "Economy",
    "fare" : "Discount",
    "passengers" : [
        { "name" : "Cesar Marto" , "email" : "joasousa@deloite.pt" },
        { "name" : "Sonia Marto", "email" : "example@example.com"}
    ],
    "segments" : [
        { "flightNumber" : "TP130", "origin" : "LIS", "destination" : "GVA", "data" : "2017-12-04T18:25:43.511Z" }
    ]
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/prechat', function(req, res, next) {
    res.render('prechat', {});
});

router.get('/thankyou', function(req, res, next) {
    res.render('thankyou', {});
});

router.get('/booking/:id', function(req, res, next) {
    var id = req.params.id;
    if(id === 'BNK123'){
        res.json({ "status": "OK", "booking" : booking1 });
    }
    else{
        res.status(500).send({ error: 'Not found!' })
    }
});



module.exports = router;
