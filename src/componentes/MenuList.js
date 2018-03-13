import React from 'react';
import MenuItem from './MenuItem';

const menu = [
  {id: 0, name : 'Hamburguesa', img : "https://ugc.kn3.net/i/origin/http://burgerking.s3-website-us-east-1.amazonaws.com/sites/default/files/hamburgesa_0.png", price : "5.00"},
  {id: 1, name : 'Hamburguesa doble', img : "http://www.bembos.com.pe/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/a/parrillera.png", price : "10.00"},
  {id: 2, name : 'Papas', img : "https://vignette.wikia.nocookie.net/mundogaturro/images/c/c4/PAPAS_FRITAS.png/revision/latest?cb=20170318215540&path-prefix=es", price : "5.00"},
  {id: 3, name : 'Gaseosa', img : "http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.co/files/BK_Web_GASEOSA_500X540px.png", price : "3.00"},
];

const MenuList = () => (

  <div className="col-12">
    {menu.map(menu =>
      <MenuItem
        key={menu.id}
        {...menu}
      />
    )}
  </div>
)

export default MenuList;