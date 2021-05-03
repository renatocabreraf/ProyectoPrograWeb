
var mongoskin = require("mongoskin");
var express=require('express');
var path =require('path');

const cors = require('cors');
const app = express();

const options = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'authorization',
    'user'
  ],exposedHeaders:['authorization'],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE', 
  origin: '*',   
  preflightContinue: false,
};

app.use(cors(options));



var db = mongoskin.db("mongodb://@localhost:27017/apidb", {safe:true});
var id = mongoskin.helper.toObjectID;

var allowMethods = function (req, res, next){
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
}

var allowCrossTokenHeader = function(req, res, next){
  res.headers("Access-Control-Allow-Methods", "token");
};

var auth = function(req, res, next){
  if(req.headers.token === "ps123"){
    return next();
  } else{
    return next(new Error("no autorizado"));
  }
}

//http://localhost:8080/api/:coleccion/:id

app.param("coleccion", function(req, res, next, coleccion) {
  req.collection = db.collection(coleccion);
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(allowMethods);
app.use(allowCrossTokenHeader);

//POST
app.post("/api/:coleccion", auth, function(req, res, next) {
  req.collection.insert(req.body, {}, function (e, result) {
    if(e) return next(e);
      res.send(result);
  });
  
});

//GET

app.get("/api/:coleccion", auth, function(req, res, next){
  req.collection.find({}, {limit: 10, sort: [['_id', -1]]}).toArray(function(e, results){
    if(e) return next(e);
    res.send(results);
  });
});

app.get("/api/:coleccion/:id", auth, function(req, res, next){
  req.collection.findOne({_id: id(req.params.id)}, function(e, results){
    if(e) return next(e);
    res.send(results);
  })
});

//  PUT

app.put("/api/:coleccion/:id", auth, function(req, res, next){
  req.collection.update({_id: id(req.params.id)}, {$set: req.body}, {safe: true, multi: false},
  function(e, result){
    if(e) return next(e);
    res.send((result == 1) ? {resultado: "ok"} : {resultado: "ko"});
  });
});

//DELETE

app.delete("/api/:coleccion/:id", auth, function(){
  req.collection.remove({_id: id(req.params.id)}, function(e, result){
    if(e) return next(e);
    res.send((result == 1) ? {resultado: "ok"} : {resultado: "ko"});
  });
});


app.listen(4000, function(){
  console.log("Servidor escuchando en el puerto 4000");
})