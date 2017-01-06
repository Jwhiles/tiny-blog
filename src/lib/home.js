const homePage = (data) => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
    <h1>Tiny Blog</h1>
      <form method="POST" action="/addpost">
        <label for="post_title">post_title</label>
        <textarea name="post_title"></textarea>
        <label for="post_content">Your post:</label>
        <textarea name="post_content"></textarea>
        <input type="submit" />
      </form>
    <div>
      <h2>${data[0].post_title || ''}</h2>
      <p>${data[0].post_content || ''}</p>
      <time>${data[0].creation_date.toDateString() || ''}</time>
    </div>
    <div>
      <h2>${data[1].post_title || ''}</h2>
      <p>${data[1].post_content || ''}</p>
      <time>${data[1].creation_date.toDateString() || ''}</time>
    </div>
    <div>
      <h2>${data[2].post_title || ''}</h2>
      <p>${data[2].post_content || ''}</p>
      <time>${data[2].creation_date.toDateString() || ''}</time>
    </div>

    </body>
  </html>`;
};

module.exports = homePage;
