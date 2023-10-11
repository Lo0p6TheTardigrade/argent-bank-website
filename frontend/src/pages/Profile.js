import React from 'react';
import '../scss/pages/Profile.scss';
import UserProfile from '../components/UserProfile';
import Layout from '../components/Layout';
import { useSelector } from 'react-redux';
import Error from '../components/Error';

const Profile = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  return (
    <Layout>
      {isLoggedIn ? (
        <div className="profile-container">
          <UserProfile />
        </div>
      ) : (
        <Error />
      )}
    </Layout>
  );
};

export default Profile;
