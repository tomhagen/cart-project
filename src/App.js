import React, { Component } from 'react';
import './App.css';
import Header from './component/header'
import Message from './component/message'
import Cart from './component/cart'
import Footer from './component/footer'
import ProductContainer from './containers/ProductContainer'
import CartContainer from './containers/CartContainer';

class App extends Component {
  render() {
    return (
      <div>
      {/* <!-- Header --> */}
      <Header/>
      <main id="mainContainer">
          <div className="container">
              {/* <!-- Products --> */}
              <ProductContainer/>
              {/* <!-- Message --> */}
              <Message/>
              {/* <!-- Cart --> */}
              <CartContainer/>
          </div>
      </main>
      {/* <!-- Footer --> */}
      <Footer/>
  </div>
    );
  }
}

export default App;
