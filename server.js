// server.js
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import path from 'path';
import App from "./src/App"
import { Helmet } from "react-helmet";

const app = express();

// Serve static files
app.use('/static', express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
  const context = {};
  const appString = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <title>React SSR Example</title>
      </head>
      <body>
        <div id="root">${appString}</div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
