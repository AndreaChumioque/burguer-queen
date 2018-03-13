import React, { Component } from 'react'
import Header from './componentes/Header'
import OrderList from './componentes/OrderList'
import Menu from './componentes/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Menu />
          <OrderList />
        </div>
    );
  }
}

export default App;