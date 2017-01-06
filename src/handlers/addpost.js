const addPostSql = require('../sql-queries/addpost.js');

const addPostHandler = (req, rep) => {
  console.log(`got to the handler`);
  const userName = req.params.username;
  const content = req.payload.post_content;
  const options = {
    userName: userName,
    content: content
  };
  addPostSql((err, data) => {
    if (err) throw err;
  }, options);
  rep.redirect(`/`);
};

const addPost = {
  method: 'POST',
  path: '/addpost',
  handler: addPostHandler
};

module.exports = addPost;
