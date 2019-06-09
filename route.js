const express = require('express');
const fs = require('fs');
const app = express();

const db = require('./database.js');

const router = express.Router();

// app.use(express.static('blood')); //Serves resources from folder blood

router.get('/', function (req, res) {
  fs.readFile('./blood/public/index.html',function(err, data) {
    if(err){
        res.writeHead(400,{'Content-Type': 'text/html'});
        return res.end("Page error<br>404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    
    res.end();
  })
});

router.post('/insert', function(req, res){
  var item = {
  name : req.body.name,
  email : req.body.email,
  gender : req.body.gender,
  dob : req.body.dob,
  bloodgroup : req.body.bloodgroup,
  state : req.body.state,
  zone : req.body.zone,
  district : req.body.district,
  bodyweight : req.body.bodyweight,
  address  : req.body.address,
  cnumber : req.body.number
  }
  
  db.collection('donor details').insertMany([item], function(err, docs) {
		if(err) {
			res.send({error: err.message });
    }
    console.log(item);
  // res.send(docs);
  });
  res.redirect('/');
});

// app.post('/regs', function(request, response){
// 	const data = request.body;
// 	console.log(data);
// Blog.insertMany([data], function(err, docs) {
//   if(err) {
//     response.send({error: err.message });
//   }
// response.send(docs);
// });
// });

module.exports = router;