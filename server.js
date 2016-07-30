

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect("mongodb://quotes:WjMNmrvZpWdn4i7@ds031865.mlab.com:31865/rachels-quotes", function(err, database) {
  if (err) return console.log(err);
  db = database;
  app.listen(3000, function() {
    console.log("yay I'm working");
  });

});

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');



app.get('/', function(req, res) {
  db.collection('quotes').find().toArray(function(err, results){
    res.render('index.ejs', {quotes: results});
  });

});

app.post('/quotes', function(req, res) {
  db.collection('quotes').save(req.body, function(err, result) {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/');
  });
});

