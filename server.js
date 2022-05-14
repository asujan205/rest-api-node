var express = require('express');
const { json } = require('express/lib/response');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "database.json",  function (err, data) {
      console.log( data );
      res.end( data );
   });
})
const user={
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
     }
}
app.post('/addUser',function(req,res){
    fs.readFile( __dirname + "/" + "database.json",  function (err, data) {

        data=JSON.parse(data)
        data["user4"] = user["user4"];
        res.end(JSON.stringify(data))


    });
})
app.get('/:id',function(req,res){
    fs.readFile(__dirname+"/","database.json", function(err,data){
        var users = JSON.parse( data );
        var user = users["user" + req.params.id] 
        console.log( user );
        res.end( JSON.stringify(user));
    });

})
app.delete('/Delete',function(req,res){    
    fs.readFile(__dirname+"/","database.json", function(err,data){
        data = JSON.parse( data );
        delete data["user" + 2];
        res.end(JSON.stringify(data))
    })


})
var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})