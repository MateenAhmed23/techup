import React, { Component } from "react";
import "./csssubcomponents/jobdisplaycell.css";

class QuestionDisplaycell extends Component {
  state = {};
  render() {
    return (
      <div className="cell">
        <ul>
          <li>
            <a
              onClick={() => this.props.onnavclick("home")}
              className="commonitems active"
              href="#"
            >
              Requirement#{this.props.id}
            </a>
            <div className="questoons">{this.props.question}</div>
          </li>
          <li>
            <a href="#">&nbsp;&nbsp;</a>
          </li>
          <li>
            <a href="#">&nbsp;&nbsp;</a>
          </li>
          <li>
            <a
              onClick={() => this.props.onnavclick("home")}
              className="commonitems active"
              href="#"
            >
              Question Type
            </a>
            <div className="questoons">{this.props.type}</div>
          </li>
        </ul>
        <a
          onClick={() => this.props.onnavclick("Edit")}
          className="editt"
          href="#"
        >
          View Details
        </a>
        <a href="#">&nbsp;&nbsp;</a>

        <a
          onClick={() => this.props.onnavclick("Delete")}
          className="viewdetails"
          href="#"
        >
          Remove
        </a>
      </div>
    );
  }
}

export default QuestionDisplaycell;
