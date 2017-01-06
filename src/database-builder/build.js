const env = require('env2')('./config.env');
const fs = require('fs');
const dbConn = require('../dbconnection.js');
const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

dbConn.query(sql, (error, result) => {
  (error
    ? console.log('Error: ', error)
    : console.log('Result ', result)
  );
});
