var express = require('express'),
    app     = express();

app.get('/', function(req, res){
    res.sendfile(__dirname + '/app/views/index.html')
});

app.use('/js', express.static(__dirname + '/app/js'));

app.post('/api/beers', function(req, res){
    
});

app.listen(3000, function(){
    console.log("Listenin' :)");
})