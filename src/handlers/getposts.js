const latestPosts = require(`../sql-queries/getpost.js`);
const homeHTML = require(`../lib/home.js`);

const homeHandler = (req, rep) => {
  const options = {};
  latestPosts((err, data) => {
    if (err) throw err;
    rep(homeHTML(data));
  }, options);
};

const home = {
  method: 'GET',
  path: '/',
  handler: homeHandler
};

module.exports = home;
