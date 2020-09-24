// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
	//res.render('pages/index');
	res.render('pages/index', { title: 'Omnius Web Development' });
});



app.use(express.static(__dirname + '/public'))

// about page 
app.get('/about', function(req, res) {
	res.render('pages/about', { title: 'Omnius Web Development - About' });
});

// services page 
app.get('/services', function(req, res) {
	res.render('pages/services', { title: 'Omnius Web Development - Services' });
});

// pricing page 
app.get('/pricing', function(req, res) {
	res.render('pages/pricing' , { title: 'Omnius Web Development - Pricing' });
});

// portfolio page 
app.get('/portfolio', function(req, res) {
	res.render('pages/portfolio', { title: 'Omnius Web Development - Portfolio' });
});

// contact page 
app.get('/contact', function(req, res) {
	res.render('pages/contact', { title: 'Omnius Web Development - Contact' });
});

//Careers page 
app.get('/careers', function(req, res) {
	res.render('pages/careers' , { title: 'Omnius Web Development - Careers' });
});

//miscellaneous page 
app.get('/miscellaneous', function(req, res) {
	res.render('pages/miscellaneous', { title: 'Omnius Web Development - Miscellaneous' });
});

//first page 
app.get('/first', function(req, res) {
	res.render('pages/first', { title: 'Omnius Web Development - First' });
});

//second page 
app.get('/second', function(req, res) {
	res.render('pages/second' , { title: 'Omnius Web Development - Second' });
});

//fourth page 
app.get('/fourth', function(req, res) {
	res.render('pages/fourth', { title: 'Omnius Web Development - Fourth' });
});

app.listen(process.env.PORT || 5000);
//console.log('8080 is the magic port');