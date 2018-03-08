import React, { Component } from 'react';
import './css/Header.css'

class Header extends Component {
  render() {
    return (
      <header className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 id="logo"><img src="assets/logo-2.png" width="100" /> </h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;