// const assert = require('assert');
const express = require('express');
const fs = require('fs');

var router = express.Router()

router.get('/', function (req, res) {
  fs.readFile('./blood/index.html', function(err, data) {
    if(err){
        res.writeHead(400,{'Content-Type': 'text/html'});
        return res.end("Page error<br>404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    
    res.end()
  })
});

// app.post('/regs', function(req, res){
//   var item = {
//     Name : req.body.name,
//     Address : req.body.address,
//     RHGroup : req.body.bgroup,
//     Height : req.body.height,
//     Weight : req.body.weight,
//     Phone : req.body.phone,
//     Donated : req.body.donated
//   }
// });

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