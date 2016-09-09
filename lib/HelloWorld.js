/**
* express - Module is used to build web based applications in node
*/
var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('My First App');
});

app.listen(8080,function(){
	console.log('App is starting and running in port 8080');
});