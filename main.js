var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var bodyParser = require('body-parser');   
var func = require('./lib/profun.js');
const express = require('express')
var app = express();
var db = require('./lib/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.get('/', function(request, response) {
  var title = 'fishing';
  var list = func.list();
  var html = func.MHTML(list);
  response.send(html);
});
app.use(express.static('public'));
app.get('/page/information', function(request, response) {
  var title ='';
  var list ='';
  title= 'fishing';
      var list = func.list();
      var html = func.HTML3(list);
      response.send(html); 

});

app.post('/page/information',function(req,res){
 var a = req.body.selThree;

 var title ='';
 var list ='';
 
 db.query(`select * from 장소 where 지역 = "${a}";`+`select * from 배 where blocate = "${a}";`+`select * from 숙박 where mlocation = "${a}";`+`select * from 편의시설 where plocation = "${a}";`, function (error, results, fields) {
   if (error) {
       console.log(error);
   }else{
     
     b=results[0][0].x;
     c=results[0][0].y;
     
     var boat = ``;
     var i = 0;
     while(i < results[1].length){
       boat = boat + `<div class = boxer><h2>${results[1][i].bname}<h2></br><h3>${results[1][i].bnumber}</h3></div>`;
       
       i = i + 1;
     };
 
     var motel = ``;
     var i = 0;
     while(i < results[2].length){
       
       motel = motel + `<div class = boxer><h2>${results[2][i].mname}<h2></br><h3>${results[2][i].mnumber}</h3></div>`;
       i = i + 1;
     };
 
     var pss = ``;
     var i = 0;
     var mk=``;
     while(i < results[3].length){
       pss = pss + `<div class = boxer><h2>${results[3][i].pname}<h2></br><h3>${results[3][i].pnumber}</h3></div>`;
       mk = mk+`var marker = new google.maps.Marker({
        position: new google.maps.LatLng(${results[3][i].x},${results[3][i].y}),
        map: map,
        title: '${results[3][i].pname}'
      });`
       
       i = i + 1;
     }
   
   
   
     var title= 'fishing';
     var list = func.list();
     var html = func.HTML2(list,a,b,c,boat, motel,pss,mk);
     res.send(html); 
   }
});
});

app.get('/page/Q&A', function(request, response) {
  var title = 'fishing';
  var list = func.list();
  var html = func.QHTML(list);
  response.send(html);
});
app.listen(3000);
