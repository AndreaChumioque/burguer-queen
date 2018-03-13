import React from 'react';

const MenuItem = ({name, img, price}) => (
  <div className="col-12">
    <div className="col-6">
      <img className="img-fluid" src={img} alt="Hamburguesa"/>
    </div>
    <p>{name}</p>
    <p>{price}</p>
  </div>
)

export default MenuItem;