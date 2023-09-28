import React from 'react';
import '../scss/pages/Home.scss';
import Layout from '../components/Layout';
import User from '../components/User';

const Home = (isVisible, isVisible2, isVisible3) => {
  return (
    <div className="home-container">
      <Layout>
        <User
          isVisible={isVisible}
          isVisible2={isVisible2}
          isVisible3={isVisible3}
        />
      </Layout>
    </div>
  );
};

export default Home;
