var express = require('express');
const app = express();
var fs = require('fs');

app.use(express.static('blood'));//Serves resources from public folder

app.get('/',function (req, res) {
  fs.readFile('./blood/index.html', function(err, data) {
    if(err){
        res.writeHead(400,{'Content-Type': 'text/html'});
        return res.end("Page error<br>404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    
    res.end();
  });
});
app.listen(3000,function(){
  console.log('Server running at localhost:'+3000);
});