const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL,
        address1 VARCHAR (100) NOT NULL,
        address2 VARCHAR (100),
        city VARCHAR(50) NOT NULL,
        state VARCHAR(50) NOT NULL,
        zip VARCHAR(5) NOT NULL,
        phone VARCHAR(10) NOT NULL,
        creditcard VARCHAR(16) NOT NULL,
        expiry VARCHAR(4) NOT NULL,
        cvv VARCHAR(3) NOT NULL,
        billingzip VARCHAR(5) NOT NULL)`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
