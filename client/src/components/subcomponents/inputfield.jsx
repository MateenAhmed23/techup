import React, { Component } from "react";
import './csssubcomponents/inputfield.css';

class Inputfield extends Component {
  state = {};
  render() {
    return (
      <div className="input-field-container">
        <label className="input-label" htmlFor={this.props.id}>{this.props.label}</label>
        <input 
          type={this.props.type} 
          value={this.props.value} 
          onChange={this.props.onChange} 
          className="input-field" 
          placeholder={this.props.placeholdr} 
        />
      </div>
    );
  }
}

export default Inputfield;
