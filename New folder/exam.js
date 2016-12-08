var express = require('express');
var app = express();
app.use(express.static('public'))


app.get('/', function (req, res) {
res.sendFile( __dirname + "/public/" + "exam.html" );

});

var server = app.listen(8989, function () {  
   var port = server.address().port;
   
   console.log("Example app listening at port: ",port);

});