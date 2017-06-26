var express= require('express');
var bodyParser = require('body-parser');
var script= require('./script.js');
var app= express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/get_tweets', function(req, res){
	var query= req.body.keyword;
	var numb= req.body.number;
	//console.log(query);
	var results=script(res, query, numb);
});


var server=app.listen(process.env.PORT, function(){
	console.log('app runs fine!');
});

