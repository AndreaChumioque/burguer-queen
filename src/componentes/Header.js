import React from 'react';
import './css/Header.css'

const Header = () => {
    return (
      <header className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 id="logo"><img src="assets/logo-2.png" width="100" alt="Burguer Queen"/> </h1>
          </div>
        </div>
      </header>
    );
}

export default Header;