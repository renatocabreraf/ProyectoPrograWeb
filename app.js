const express = require('express');
const app = express();

app.get(function(req, res) {
    res.send('Aqui va el get');
  });

app.post(function(req, res) {
    res.send('Aqui va el post');
  });

app.put(function(req, res) {
    res.send('aqui va el put');
  });

app.delete(function(req, res) {
    res.send("aqui va el delete")
  });

app.listen(3003, function () {
  console.log('Funciona listening!');
});