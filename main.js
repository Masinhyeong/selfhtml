var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var func = require('./lib/profun.js');
const express = require('express')
var app = express();
var db = require('./lib/db');

app.use(express.static('public'));
app.get('*', function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});

app.get('/', function(request, response) {
  var title = 'fishing';
  var list = func.list(request.list);
  var html = func.MHTML(list);
  response.send(html);
});
app.use(express.static('public'));
app.get('/page/:information', function(request, response) {
  var filteredId = path.parse(request.params.information).base;
  fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
    var title = 'fishing';
    var list = func.list(request.list);
    var html = func.HTML(list, description);
    // db.query('SELECT * FROM new_table', function (error, results, fields) {
    //   if (error) {
      
    //       console.log(error);
    //   }else{
    //     var tmpt = '';
    //     for(var i=0;i<results.length;i++){
    //       tmpt+=`<p>${results[i]['table']}</p>`;
    //     }

    //     var html = func.HTML2(list, description,tmpt);
        response.send(html);
    //   }
    // });
  });
});

app.get('/page/:call', function(request, response) {
  var filteredId = path.parse(request.params.call).base;
  fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
    var title = 'fishing';
    var list = func.list(request.list);
    var html = func.HTML(list, description);
    response.send(html);
    });
});
app.listen(3000);
