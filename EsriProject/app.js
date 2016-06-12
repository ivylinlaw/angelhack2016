var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.status(200).render('esri_testing');
});

app.listen(port);
console.log("Listening to port", port);
