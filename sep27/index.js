const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

app.use = express();

app.post("/", function(req, res){
    res.sendFile(__dirname + "index.html");
})


app.listen(3000, function(){
    console.log("server is running at port 3000");
})