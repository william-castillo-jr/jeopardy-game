const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./jeopardy.db');

module.exports = db;