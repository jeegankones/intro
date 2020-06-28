import React, { useEffect } from 'react';
import { useAuth0 } from '../react-auth0-spa';
import axiosInstance from '../axiosApi';

const Profile = () => {
  const { isAuthenticated, logout, getTokenSilently } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = await getTokenSilently();

      const response = await axiosInstance.get('/profile', {headers: {Authorization: `Bearer ${token}`}});
      console.log(response.data)
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] );

  return (
    <div className="container">
      <div>Profile page works!</div>
      {isAuthenticated && <button type="button" className="btn btn-secondary" onClick={handleLogout}>Log out</button>}
    </div>
  );
};

export default Profile;
