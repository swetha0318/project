var fs=requrie('fs');
fs.unlink('banana.txt',function(err){
	if(err)throw err;
	console.log('File delected!');
});