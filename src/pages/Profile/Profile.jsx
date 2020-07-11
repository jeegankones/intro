import React, { useEffect, useState } from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import axiosInstance from '../../axiosApi';

import style from './Profile.module.scss';

const Profile = () => {
  const { isAuthenticated, logout, loading, getTokenSilently } = useAuth0();
  const [profileData, setProfileData] = useState([]);

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  useEffect(() => {
    if (loading) {
      return;
    }

    const getData = async () => {
      const token = await getTokenSilently();

      axiosInstance.get('/profile', { headers: { 'Authorization': `Bearer ${token}` } })
        .then((response) => {
          setProfileData(response.data);
        });
    };

    getData();
  }, [loading, getTokenSilently]);

  return (
    <>
      <div className="container">
        <section className="d-flex flex-column">
          <h1 className="mb-0">Welcome, <span
            className="text-muted"><br/>{profileData.first_name}</span></h1>
          <section className="align-self-center d-flex flex-column align-items-center">
            <div className={style.amountEarned}>
              ${profileData.current_reward_dollars}
            </div>
            <div className="pb-4">
              Dollars earned
            </div>
            {profileData.current_reward_dollars > 0 ?
              <button type="button" className="btn btn-primary mb-3">Cash out</button> :
              <button type="button" className="btn btn-primary disabled mb-3">Cash out</button>
            }
          </section>
          <div className="pb-4">
            <div className={style.profileItem}>
              <label className="text-muted">Total earned</label>
              <div>${profileData.historical_reward_dollars}</div>
            </div>
            <div className={style.profileItem}>
              <label className="text-muted">Name</label>
              <div>{profileData.first_name} {profileData.last_name}</div>
            </div>
            <div className={style.profileItem}>
              <label className="text-muted">Email</label>
              <div>{profileData.contact_email}</div>
            </div>
          </div>
          {isAuthenticated && <button type="button" className="btn btn-secondary align-self-center"
                                      onClick={handleLogout}>Log out</button>}
        </section>
      </div>
    </>
  );
};

export default Profile;

