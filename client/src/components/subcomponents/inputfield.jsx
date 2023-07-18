import React, { Component } from "react";

class Inputfield extends Component {
  state = {};
  render() {
    return (
      <div>
        <label className={this.props.claslabel} htmlFor={this.props.id}>{this.props.label}</label>
        <input type={this.props.type} value={this.props.value} onChange={this.props.onChange} className={this.props.classfield} placeholder={this.props.placeholdr} />
      </div>
    );
  }
}

export default Inputfield;
