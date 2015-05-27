var Beer = require('../models/beer');

module.exports.create = function(req, res){
    var beer = new Beer(req.body);
    beer.save(function(err, result){
        res.json( result );
    });
};

module.exports.list = function(req, res){
    Beer.find({},function(err, results){
        res.json(results);
    })
};