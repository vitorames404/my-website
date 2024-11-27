const Database = require("better-sqlite3");

// Create a connection to the database
const db = new Database("./comments.db");

// Create the comments table that will store all the comments
const createTable = `
    CREATE TABLE IF NOT EXISTS comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        message TEXT NOT NULL
    );
`;

db.exec(createTable);
console.log("Started db and created the comments table");
db.close();