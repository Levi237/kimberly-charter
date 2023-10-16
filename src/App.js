import React, { Component } from 'react';

import Header               from './pages/Header';
import Footer               from './pages/Footer';
import HomePage             from './pages/home';

export default class App extends Component {
  render (){
    return (
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    );
  };
};