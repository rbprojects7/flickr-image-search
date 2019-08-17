import '@babel/polyfill';
import React from 'react';
import Helmet from 'react-helmet';
import { values } from 'lodash';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import createAppStore from '../redux/store';
import routes from '../routes';
import App from '../client/containers/App';

const renderFullPage = (html, initialState, styleTags) => {
  const head = Helmet.rewind();
  const bundles = require('../../public/webpack-assets.json'); // eslint-disable-line
  let assets = values(bundles).map(bundleName => bundleName);
  const styles = assets.filter(file => file.endsWith('.css'));
  const scripts = assets.filter(file => file.endsWith('.js'));
  return `
    <!DOCTYPE html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        ${head.title.toString()}
        ${head.meta.toString()}
        ${styleTags}
        ${styles
          .map(file => `<link href="${file}" media="screen, projection" rel="stylesheet" type="text/css">`)
          .join('\n')}
      </head>
      <body>
        <div id="app-container">${html}</div>
        <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
        ${scripts.map(file => `<script src="${file}"></script>`).join('\n')}
      </body>
    </html>
    `;
};

function serverRender(req, res) {
  const loadRouteData = () => {
    const promises = [];
    routes.some(route => matchPath(req.url, route));
    return Promise.all(promises);
  };

  (async () => {
    try {
      await loadRouteData();
      const context = {};
      const store = createAppStore({
        initialState: {},
      });
      const sheet = new ServerStyleSheet();
      const componentStr = renderToString(
        sheet.collectStyles(
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <App />
            </StaticRouter>
          </Provider>,
        ),
      );
      if (context.url) {
        res.status(301).setHeader('Location', context.url);
        res.end();
        return;
      }
      const status = context.status === '404' ? 404 : 200;
      const styleTags = sheet.getStyleTags();
      res.status(status).send(renderFullPage(componentStr, {}, styleTags));
    } catch (err) {
      res.status(404).send('Not Found :(');
      console.error(`==> 😭  Rendering routes error: ${err}`);
    }
  })();
}

module.exports = serverRender;
