const addPost = require('./handlers/addpost.js');
const home = require('./handlers/getposts.js');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (req, rep) => {
      rep.file('../public/index.html');
    }
  },
  {
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: {
        path: '.'
      }
    }
  },
  addPost,
  home
];

module.exports = routes;
