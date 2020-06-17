import React from 'react';
import { useAuth0 } from '../react-auth0-spa';

const Profile = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <div className="container">
      <div>Profile page works!</div>
      {isAuthenticated && <button type="button" className="btn btn-secondary" onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default Profile;
