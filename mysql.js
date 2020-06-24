var db = require('./lib/db');
  
db.query('select distinct 지역 from 장소 where 장소.시 = "부안";', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    
    
    a=results[0].지역;
    
    console.log(a);
    
    
});
