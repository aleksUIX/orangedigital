var express = require('express')
    , app = express()
    , path = require('path');


// configuration
app.use(express.static(__dirname));

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/private'));


app.listen(3000);

// routing
app.get('/',function(req,res){
    res.sendfile('views/index.html')
});


app.get('/tests',function(req,res){
    res.sendfile('views/tests.html')
});

