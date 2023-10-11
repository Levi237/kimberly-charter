import React, { Component } from 'react';

import HomePage from './pages/home';

export default class App extends Component {
  render (){
    return (
      <div className="body">
        <header><img className="name-logo" width="50%" height="auto" src="name_logo.png" alt="Kimberly Charter - name logo"/></header>
        <HomePage />
        <footer></footer>
      </div>
    );
  };
};