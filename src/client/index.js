import '@babel/polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createAppStore from '../redux/store';
import App from './containers/App';

const initialState = window.__INITIAL_STATE__;
const store = createAppStore({
  initialState,
});

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app-container'),
);
