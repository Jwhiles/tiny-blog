const dbConn = require('../dbconnection.js');

const latest5 = (cb, options) => {
  dbConn.query(`SELECT post_content,
              post_title,
              creation_date,
              post_id
              FROM posts
              ORDER BY creation_date ASC
              LIMIT 5`, options, (err, data) => {
                (err ? cb(err) : cb(null, data.rows));
              });
};

module.exports = latest5;
