var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose'),
    beersCtrl  = require('./server/controllers/beers-controller');

mongoose.connect('mongodb://localhost:27017/mean-intro');

app.use(bodyParser());

app.get('/', function(req, res){
    res.sendfile(__dirname + '/app/views/index.html');
});

app.use('/js', express.static(__dirname + '/app/js'));

app.get('/api/beers', beersCtrl.list);
app.post('/api/beers', beersCtrl.create);

app.listen(3000, function(){
    console.log("Listenin' :)");
});