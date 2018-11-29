const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory:',(err) => {
    if (err) {
        return console.log(err.message);
    }

    console.log('Sqlite DB is ready');
});

//close DB
db.close((err) => {
    if (err) {
        console.log(err.message);
    }

    console.log('Database Closed');
});





