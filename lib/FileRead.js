/*
* Mode used to read/write files in node
*/
fs = require('fs');

/*
* Reading file contents in asynchronously  mode also called as non-blocking mode
*/
fs.readFile('test.txt','utf8',function(err,data){
	if(err){
		console.log("Failed"+err);
		return;
	}
	console.log(data);
});

/*
* Reading  file contents in synchronous mode also called blocking mode
*/
var contents = fs.readFileSync('test.txt','utf8');
console.log(contents);