import React from 'react';
import '../scss/pages/Profile.scss';
import UserProfile from '../components/UserProfile';
import Layout from '../components/Layout';

const Profile = () => {
  return (
    <Layout>
      <div className="profile-container">
        <UserProfile />
      </div>
    </Layout>
  );
};

export default Profile;
