const dbConn = require('../dbconnection.js');

module.exports = (cb, options) => {
  dbConn.query(`INSERT INTO  posts(
                post_content,
                post_title,
                creation_date)
                VALUES(
                  $1,
                  $2,
                  CURRENT_DATE)`,
                  [options.content, options.postTitle], (err, data) => {
                    (err ? cb(err) : cb(null, null));
                  });
};
