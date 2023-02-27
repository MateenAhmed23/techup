import React, { Component } from "react";

class Button extends Component {
  state = {};
   buttonStyle = {
    borderRadius: '9px',
    backgroundColor: 'grey',
    color: 'white',
    padding: '10px',
  };
  render() {
    return <button onClick={this.props.onClick} className={this.props.className}type={this.props.type} style={this.buttonStyle }>{this.props.children} </button>;
  }
}

export default Button;
