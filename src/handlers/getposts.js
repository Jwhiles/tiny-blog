const latestPosts = require(`../sql-queries/getpost.js`);

const homeHandler = (req, rep) => {
  const options = {};
  latestPosts((err, data) => {
    if (err) throw err;
    console.log(data);
  }, options);
};

const home = {
  method: 'GET',
  path: '/home',
  handler: homeHandler
};

module.exports = home;
