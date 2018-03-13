import React from 'react'

const OrderList = (order) => {
  order = {
    type: 'Desayuno',
    orderedItems: [
      {product: 'Cafe americano', price: 5, qty: 1},
      {product: 'Jugo natural', price: 7, qty: 2},
      {product: 'Cafe con leche', price: 7, qty: 1}
    ]
  }

  return (
    <section className="col-6">
      <h2>Tu pedido</h2>
      <h3>Menu {order.type}</h3>
      <table>
        <thead>
          <tr>
            <th>Items</th>
            <th>Precio u.</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {order.orderedItems.map(item => 
          <tr key={item.product}>
            <td>{item.product}</td>
            <td>{item.price}</td>
            <td>{item.price * item.qty}</td>
            <td><i className="far fa-times-circle"></i></td>
          </tr>
          )}
        </tbody>
      </table>
    </section>
  )
}

export default OrderList