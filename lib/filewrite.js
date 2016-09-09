/**
* fs - module used to do file related operations in node
*/
fs = require('fs');

var data = "This text is going to be written in file";
var fileName = 'testFile.txt';
fs.writeFile(fileName,data,function(err){
	if(err){
		console.log('File write failed'+err);
		return;
	}
	console.log('Content was written in file');
});
