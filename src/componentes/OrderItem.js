import React from 'react'
import PropTypes from 'prop-types'

const OrderItem = ({items}) => {
  return (
    <tbody>
    {items.map(item => 
    <tr key={item.product}>
      <td>{item.product}</td>
      <td>{item.qty}</td>
      <td>{item.price * item.qty}</td>
      <td><i className="far fa-times-circle"></i></td>
    </tr>
    )}
    {/* {console.log(items)} */}
  </tbody>
  )
}

OrderItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      qty: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}


export default OrderItem