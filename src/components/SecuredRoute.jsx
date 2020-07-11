import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';

const SecuredRoute = ({ component: Component, layout: Layout, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: window.location.pathname }
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect]);

  const render = (props) => (isAuthenticated === true ? <Layout><Component {...props} /></Layout> : null);

  return <Route path={path} render={render} {...rest} />;
};

export default SecuredRoute;
