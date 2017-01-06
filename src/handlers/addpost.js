const addPostSql = require('../sql-queries/addpost.js');

const addPostHandler = (req, rep) => {
  const postTitle = req.payload.post_title;
  const content = req.payload.post_content;
  const options = {
    postTitle: postTitle,
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
