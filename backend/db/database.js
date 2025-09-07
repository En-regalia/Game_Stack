const sqlite3 = require('sqlite3').verbose(); // addition of .verbose to enable more detailed error messages in development. Can be removed in prod.
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname,'database.sqlite')); // Connection to db file. sqlite

db.serialize(() => {
    db.run("PRAGMA foreign_keys = ON");
    
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL

        )
    `);
        
// generated from a list of all games from BGG. Imported from CSV downlaod and work. id,name,yearpublished,rank,bayesaverage,average,usersrated
// Download link to be added later https://geek-export-stats.s3.amazonaws.com/boardgames_export/boardgames_ranks_2025-09-06.zip?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20250906%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250906T194248Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Signature=7853f2f443a406c8e59e6878c3ffd9307ff1e5171245348cbc88f01b3b20aa7b
    db.run(`
        CREATE TABLE IF NOT EXISTS games (
        game_id INTEGER PRIMARY KEY,
        name TEXT,
        yearpublished INTEGER,
        rank INTEGER,
        Bayesaverage INTEGER,
        Average INTEGER,
        usersrated INTEGER,
        is_expansion INTEGER,

        )`);

    db.run(`
        CREATE TABLE IF NOT EXISTS users_collection (
        user_id INTEGER NOT NULL
        game_id INTEGER NOT NULL
        PRIMARY KEY (user_id, game_id)
        FOREIGN KEY (user id) REFERENCES users(user_id)
        FOREIGN KEY (game_id) REFERENCES games(id)
        )
    `);
});

module.exports = db; //node module to export db connection
