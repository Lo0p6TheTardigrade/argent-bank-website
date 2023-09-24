import React from 'react';
import '../scss/components/Layout.scss';
import Header from './Header';
import Footer from './Footer';

const Layout = (prop) => {
  return (
    <div className="layout-container">
      <Header />
      {prop.children}
      <Footer />
    </div>
  );
};

export default Layout;
