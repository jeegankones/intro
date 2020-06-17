import React from 'react';
import { useAuth0 } from '../react-auth0-spa';

const Profile = () => {
  const { isAuthenticated, logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div className="container">
      <div>Profile page works!</div>
      {isAuthenticated && <button type="button" className="btn btn-secondary" onClick={handleLogout}>Log out</button>}
    </div>
  );
};

export default Profile;
