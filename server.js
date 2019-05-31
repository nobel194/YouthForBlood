var express = require('express');
const app = express();
var fs = require('fs');

const Routes = require('./route.js');
const db = require('./database.js');

app.use(Routes);

db.on('error', function(err) {console.log('Database connection error',err)});
db.once('connected', function() {
  console.log("connected to mongodb!");

  app.listen(5000,function(){
	console.log('Server running at localhost:'+5000);
  })
});