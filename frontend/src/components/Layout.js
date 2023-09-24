import React from 'react';
import '../scss/components/Layout.scss';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className="layout-container">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
