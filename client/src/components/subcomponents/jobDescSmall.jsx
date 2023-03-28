import React, { Component } from "react";
import "./csssubcomponents/jobDescSmall.css";
class JobDescSmall extends Component {
  state = {};
  render() {
    return (
      <div class="field field_v1">
        
        <label className="ha-screen-reader" htmlFor={this.props.id}>
          Label
        </label>
        <input
          id={this.props.id}
          type={this.props.type}
          onChange={this.props.onChange}
          className="field__input"
          placeholder={this.props.placeholder}
          style={{ height: this.props.height }}
   />
        <span class="field__label-wrap" aria-hidden="true">
          <span class="field__label">{this.props.label}</span>
        </span>
      </div>
    );
  }
}

export default JobDescSmall;
