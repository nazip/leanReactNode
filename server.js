require('babel-register');

var express = require('express');
var app = express();

const CatalogPage = require('./render').default;

app.get('/', function(req, resp){
    resp.send(CatalogPage);
});
app.listen(3000, () => console.log('Listen 3000 port'));