import React, { Component } from 'react'
import {connect} from 'react-redux';

class Message extends Component {
  render() {
      var {message} = this.props;

    return (
        <h3>
            <span className="badge amber darken-2">{message}</span>
        </h3>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}
export default connect(mapStateToProps,null) (Message)