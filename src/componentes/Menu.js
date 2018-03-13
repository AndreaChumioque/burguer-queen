import React from 'react';
import MenuFilter from './MenuFilter';
import MenuList from './MenuList';

const Menu = () => (
  <div className="container">
    <div className="row">
      <div className="col-6">
        <MenuFilter />
        <MenuList />
      </div>
    </div>
  </div>
)

export default Menu;