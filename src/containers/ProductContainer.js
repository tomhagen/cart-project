import React, { Component } from 'react'
import {connect} from 'react-redux';
import Products from './../component/products'
import PropTypes from 'prop-types'
import {actAddToCart, actChangeMessage} from './../actions/index'

class ProductContainer extends Component {
  render() {
      var {products} = this.props;
      var {onAddToCart,onChangeMessage} = this.props;

    return (
        <Products products={products} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage}/>        
    )
  }
}

// Dùng PropTypes để kiểm tra kiểu dữ liệu, tham khảo Reactjs.org
// products phải là array, trong array có nhiều object & kiểu dữ liệu của object phải tương ứng với lúc khai báo
ProductContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product,1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (ProductContainer);