// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
	res.render('pages/index');
});



app.use(express.static(__dirname + '/public'))

// about page 
app.get('/about', function(req, res) {
	res.render('pages/about');
});

// services page 
app.get('/services', function(req, res) {
	res.render('pages/services');
});

// pricing page 
app.get('/pricing', function(req, res) {
	res.render('pages/pricing');
});

// portfolio page 
app.get('/portfolio', function(req, res) {
	res.render('pages/portfolio');
});

// contact page 
app.get('/contact', function(req, res) {
	res.render('pages/contact');
});

//Careers page 
app.get('/careers', function(req, res) {
	res.render('pages/careers');
});

//miscellaneous page 
app.get('/miscellaneous', function(req, res) {
	res.render('pages/miscellaneous');
});

//first page 
app.get('/first', function(req, res) {
	res.render('pages/first');
});

//second page 
app.get('/second', function(req, res) {
	res.render('pages/second');
});

//fourth page 
app.get('/fourth', function(req, res) {
	res.render('pages/fourth');
});

app.listen(process.env.PORT || 5000);
//console.log('8080 is the magic port');