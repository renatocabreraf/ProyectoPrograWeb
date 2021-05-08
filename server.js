var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.jason())

require('./app/routers/hotwheels.routers.js')(app);

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("App escucha en puerto", host, port)
})

var http = require('http');
var path = require('path');
var fs = require('fs');
const { function, function } = require('joi');
var mimeTypes = {
    '.js' : 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css'
};

var cache = {};
function cacheYEntrega (f, cb){
    if(!cache[f]){
        fs.readFile(f, function (err, data){
            if(!err){
                cache[f] = {content: data};
            }
            cb(err, data);
        });
        return;
    }
    console.log('Cargando' + f + 'de cache');
    cb(null, cache[f].content);
}

http.createServer(function (req, res) {
var buscar = path.basename(decodeURL(req.url)) || 'Coleccionistas.html',
    f = 'content/' + buscar;
    fs.exists(f, function(exists){
        if (exists){
            fs.readFile(f, function(err, data){
        if(err) {res.writeHead(500); res.end('Error del servidor'); return; }
        var headers = {'Content-type': mimeTypes[path.extname(buscar)]};
        res.writeHead(200, headers);
        res.end(data);
    });
    return;
    }
    res.writeHead(404);
    res.end('Pagina no encontrada');
});
}).listen(process.env.PORT || 8081);