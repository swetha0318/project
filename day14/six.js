var http=require('http');
var uc=require('upper-case');
http.createServer(function(req,res){
			res.writeHead(200,{'content-type':'text/html'});
			res.write(uc.upperCase("Wish u all success"));
			rs.end();
}).listen(8080);