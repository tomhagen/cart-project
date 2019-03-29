import React, { Component } from 'react'
import { actRemoveProductInCart, actChangeMessage, actUpdateProductInCart } from '../actions';
import {connect} from 'react-redux';
import * as Message from './../constants/message';

class cartItem extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         quantity: 1
    //     }
    // }
  render() {
      var {item} = this.props;
      var {quantity} = item;

    return (
        <tr>
            <th scope="row">
                <img src={item.product.image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{quantity}</span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light" onClick={ () => { this.onUpdateQuantity(item.product, item.quantity -1)}}>
                        <a>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves   -effect waves-light" onClick={ () => { this.onUpdateQuantity(item.product, item.quantity + 1)}}>
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{item.product.price * item.quantity} $</td>
            <td>
                <button type="button"
                 className="btn btn-sm btn-primary waves-effect waves-light" 
                 data-toggle="tooltip" 
                 data-placement="top"
                title="" data-original-title="Remove item"
                onClick={ () => {this.onDelete(item.product)}}>
                    X
                </button>
            </td>
        </tr>
    )
  }
  onDelete(product){
      console.log(product);
      this.props.onDelete(product);
      this.props.onChangeMessage(Message.MESSAGE_DELETE_PRODUCT_IN_CART_SUCCESS);
  }

  onUpdateQuantity = (product,quantity) =>{
      if(quantity > 0){
        //   this.setState({
        //       quantity: quantity
        //   });
          this.props.onUpdateQuantity(product,quantity);
      }
      this.props.onChangeMessage(Message.MESSAGE_UPDATE_CART_SUCCESS);
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (product) => {
            dispatch(actRemoveProductInCart(product))
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateQuantity: (product,quantity) => {
            dispatch(actUpdateProductInCart(product,quantity));
        }
    }
}
export default connect(null,mapDispatchToProps) (cartItem)