import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { Router } from 'react-router-dom';
import App from './App';
import { Auth0Provider } from './react-auth0-spa';
import history from './utils/history';

// Routes the user to the right place after login
const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Router history={history}>
        <App/>
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
