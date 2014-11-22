var http = require('http');

var fs = require();

var path = require('path');

http.createServer(function( req, res){
	var rutaFile = '.'+((req.url=='/')?'/index.html':req.url);
	var ext= path.extname(rutaFile);
	var contentType = 'text/html';
	switch(ext){
		case '.css':
		contentType = 'text/css';
		break;
		case '.js':
		contentType = 'text/javascript';
		break;
	}
	fs.exists (rutaFile, function(){
		if(exists){
			fs.readFile(rutaFile, function(err,content){
				if(err){
					res.writeHead(500);
					res.end('Error 500')
				}else{
					res.writeHead(200, {'content-type':contentType});
					res.end(content);
				}
			})
		}else{
			res.writeHead(404);
			res.end('Pagina no encontrada');
		}
	})
}).listen(function(){
	var address=server.address();
	console.log('Servidor corriendo el puerto', address)
});
