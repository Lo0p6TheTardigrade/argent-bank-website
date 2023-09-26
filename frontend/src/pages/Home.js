import React from 'react';
import '../scss/pages/Home.scss';
import Layout from '../components/Layout';
import User from '../components/User';

const Home = () => {
  return (
    <div className="home-container">
      <Layout>
        <User />
      </Layout>
    </div>
  );
};

export default Home;
