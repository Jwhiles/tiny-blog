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
  }
];

module.exports = routes;
