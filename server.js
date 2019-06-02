const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const db = require('./database.js');
const Routes = require('./route.js');

app.use(bodyParser.json());
app.use(Routes);

db.on('error', function(err) {console.log('Database connection error',err)});
db.once('connected', function() {
  console.log("connected to mongodb!");

  app.listen(5000,function(){
	console.log('Server running at localhost:'+5000);
  })
});