// const assert = require('assert');
const express = require('express');
const fs = require('fs');

var router = express.Router()

router.get('/', function (req, res) {
  fs.readFile('./blood/public/index.html', function(err, data) {
    if(err){
        res.writeHead(400,{'Content-Type': 'text/html'});
        return res.end("Page error<br>404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    
    res.end()
  })
});

router.post('/', function(req, res){
  var item = {
    _Name: req.body.name,
    get Name() {
      return this._Name;
    },
    set Name(value) {
      this._Name = value;
    },
    _Address: req.body.address,
    get Address() {
      return this._Address;
    },
    set Address(value) {
      this._Address = value;
    },
    _RHGroup: req.body.bgroup,
    get RHGroup() {
      return this._RHGroup;
    },
    set RHGroup(value) {
      this._RHGroup = value;
    },
    _Height: req.body.height,
    get Height() {
      return this._Height;
    },
    set Height(value) {
      this._Height = value;
    },
    _Weight: req.body.weight,
    get Weight() {
      return this._Weight;
    },
    set Weight(value) {
      this._Weight = value;
    },
    _Phone: req.body.phone,
    get Phone() {
      return this._Phone;
    },
    set Phone(value) {
      this._Phone = value;
    },
    _Donated: req.body.donated,
    get Donated() {
      return this._Donated;
    },
    set Donated(value) {
      this._Donated = value;
    },
  }
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