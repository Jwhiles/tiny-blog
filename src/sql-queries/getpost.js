const dbConn = require('../dbconnection.js');

const latest5 = (cb, options) => {
  dbConn.query(`SELECT post_content,
                users.username,
                creation_date
              FROM posts
              JOIN users ON (posts.user_id = users.user_id)
              ORDER BY creation_date DESC
              LIMIT 5`, options, (err, data) => {
                (err ? cb(err) : cb(null, data.rows));
              });
};

module.exports = latest5;
