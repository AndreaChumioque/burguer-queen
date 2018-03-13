import React, { Component } from 'react'
import Header from './componentes/Header'
import OrderList from './componentes/OrderList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <OrderList />
        </div>
    );
  }
}

export default App;
