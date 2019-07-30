import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from 'app/reducer';
import { ThemeProvider } from '@xstyled/styled-components'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = {
  colors: {
    primary: '#feb43e',
    black: '#080808',
    gray: '#d6d6d6',
    wgite: '#ffffff',
  },
  fonts: {
    text: 'Montserrat, sans-serif',
    title: 'Lato, sans-serif',
  },
  fontWeights: {
    text: '400',
    title: '900'
  },
  fontSizes: {
    button: '1.4em',
    text: '1.6em',
    title: '2.4em',
  },
  space: {
    primary: '.4em 1.4em',
    text: '.5rem',
    box: '2.4em .4em',
    content: '2em;',
    input: '.7em .4em'
  },
  radii: {
    primary: '.4em',
    circle: '50%',
  },
  shadows: {
    primary: '0 0 1em rgba(1, 1, 1, 0.2)'
  }
}

const initialState =
  typeof window !== 'undefined' && window && window.__INITIAL_STATE__;

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
