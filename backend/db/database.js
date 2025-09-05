const sqlite3 = require('sqlite3').verbose(); // addition of .verbose to enable more detailed error messages in development. Can be removed in prod.
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname,'database.sqlite')); // Connection to db file. sqlite

module.exports = db; //node module to export db connection
