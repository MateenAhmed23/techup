import React, { Component } from "react";
import "./csssubcomponents/jobdisplaycell.css";

class QuestionDisplaycell extends Component {
  state = {};
  render() {
    const { showDetailsButton = true } = this.props; // default value is true if not provided
    return (
      <div className="cell">
        <ul>
          <li>
            <a
              onClick={() => this.props.onnavclick("home")}
              className="commonitems active"
              href="#"
            >
              Question # {this.props.index}
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
          style={{ visibility: showDetailsButton ? "visible" : "hidden" }} // change visibility based on prop
        >
          View Details
        </a>
        <a href="#">&nbsp;&nbsp;</a>

        <a
          onClick={() => this.props.remove(this.props.id)}
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
