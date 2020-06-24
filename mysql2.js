var db = require('./lib/db');
db.query('select * from 전라북도, 숙박 where 전라북도.지역 = 숙박.mlocation;', function (error, results, fields) {
    if (error) {
        console.log(error);
    }else{
      
      
    var motel = `<ul>`;
    var i = 0;
    while(i < results.length){
      motel = motel + `<li>${results[i].mname} ${results[i].mnumber}</a></li>`;
      i = i + 1;
    }
    motel = motel+'</ul>';
    }
  });

  console.log(`${motel2}`);
  