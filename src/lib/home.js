const homePage = (data) => {
  console.log(data);
  if (!data) { return 'no data'; }
  const htmlData = data.map((x) => {
    return `<h2>${x.post_title || ''}</h2>
    <p>${x.post_content || ''}</p>
    <time>${x.creation_date.toDateString() || ''}</time>`;
  }).join('');
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
      ${htmlData}
    </body>
  </html>`;
};

module.exports = homePage;
