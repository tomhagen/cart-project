import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import Cart from '../component/cart';
import * as Message from './../constants/message'
import CartItem from '../component/cartItem';
import CartResult from '../component/cartResult';

class CartContainer extends Component {
  render() {
      var {cart} = this.props;
      console.log(cart);
      
    return (
        <Cart>
            {this.showCartItem(cart)}
            {this.showTotal(cart)}
        </Cart>    
    )
  }
  showCartItem = () => {
        var {cart} = this.props;
      var result = Message.MESSAGE_CART_EMPTY;
      if(cart.length > 0 ){
          result = cart.map((item,index) => {
              return <CartItem key={index} item={item} />
          })
      }
      return result
  }

  showTotal = (cart) => {
    var {cart} = this.props;
    var result = null;
    if(cart.length > 0){
        result = <CartResult cart={cart}/>
    }   
    return result
  }
}

// Dùng PropTypes để kiểm tra kiểu dữ liệu, tham khảo Reactjs.org
// products phải là array, trong array có nhiều object & kiểu dữ liệu của object phải tương ứng với lúc khai báo
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps,null) (CartContainer);