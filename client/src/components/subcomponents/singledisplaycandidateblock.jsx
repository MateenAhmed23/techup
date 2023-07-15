import React, { Component } from "react";
import "./csssubcomponents/singledisplaycandidateblock.css";

class SingleDisplaycol extends Component {
  state = {};
  render() {
    return (
      <div className="singledispaycolumn">
        <div className="left-element">
          <h1 className="compannameapplicant">{this.props.compname}fafs</h1>
          <p className="slashapplicant">-   </p>
          <h2 className="jobstatusapplicant">{this.props.status}afsq</h2>
        </div>
        <button className="mainbuttonvewdetapplicant right-element">{this.props.name}hello this is </button>
      </div>
    );
  }
}

export default SingleDisplaycol;
