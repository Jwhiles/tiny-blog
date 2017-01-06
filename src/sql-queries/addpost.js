const dbConn = require('../dbconnection.js');

module.exports = (cb, options) => {
  dbConn.query(`INSERT INTO  posts(
    post_content,
    creation_date,
    user_id)
    VALUES(
    $1,
    CURRENT_DATE,
    1)`,
    [options.content], (err, data) => {
      (err ? cb(err) : cb(null, null));
    });
};
