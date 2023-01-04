import React from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import Product from './components/Product';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='row'>
        <Main />
        <Cart />
      </div>
      <Product />
    </div>
  );
}

export default App;
