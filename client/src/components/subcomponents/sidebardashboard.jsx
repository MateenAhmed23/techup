import React, { Component } from "react";
import "./csssubcomponents/sidebardashboard.css";
import Arbisoft from "./csssubcomponents/arbisoft.jpg";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <div className="profile">
            <img src={Arbisoft} />
            <h3>Arbisoft</h3>
            <p>Software House</p>
          </div>
          <ul>
            <li>
              {/* <a href="#" class="active">
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="item">My Jobs</span>
                    </a> */}
              <a href="#" onClick={() => this.props.setActiveTab(this.props.option1)}>
                <span class="icon">
                  <i class="fas fa-home"></i>
                </span>
                <span class="item">{this.props.option1}</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => this.props.setActiveTab(this.props.option2)}>
                <span class="icon">
                  <i class="fas fa-desktop"></i>
                </span>
                <span class="item">{this.props.option2}</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <i class="fas fa-desktop"></i>
                </span>
                <span class="item">Contract Support</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
