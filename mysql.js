var db = require('./lib/db');
  
db.query('SELECT * FROM new_table', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});

db.connect.end();