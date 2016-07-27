

const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000')
});


app.get('/', function(req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + '/index.html')
});