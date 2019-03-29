import React, { Component } from 'react'
import Product from './product'


class Products extends Component {
  render() {
      var {products,onAddToCart} = this.props;
    return (
        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
               {products.map((product,index) => {
                   return <Product key={index} product={product} onAddToCart={onAddToCart}/>
               })}
            </div>
        </section>
    )
  }
}

export default Products;