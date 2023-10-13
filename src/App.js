import React, { Component } from 'react';

import Header               from './Header';
import HomePage             from './pages/home';

export default class App extends Component {
  render (){
    return (
      <div className="body">
        <Header />
        <HomePage />
        <footer></footer>
      </div>
    );
  };
};