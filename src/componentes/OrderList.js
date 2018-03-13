import React from 'react'
import OrderItem from './OrderItem'

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
            <th>Cantidad</th>
            <th>A pagar</th>
          </tr>
        </thead>
        <OrderItem items={order.orderedItems} />
      </table>
    </section>
  )
}

export default OrderList