import React, { Component } from "react";
import "./csssubcomponents/sidebardashboard.css";
import Arbisoft from "./csssubcomponents/arbisoft.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDesktop, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class Sidebar extends Component {
  state = {
    isSidebarOpen: false
  };

  toggleSidebar = () => {
    this.setState(prevState => ({
      isSidebarOpen: !prevState.isSidebarOpen
    }));
  };

  render() {
    return (
      <div className={`wrapper ${this.state.isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar">
          <div className="profile">
            <img src={Arbisoft} alt="Arbisoft" />
            <h3>Arbisoft</h3>
            <p>Software House</p>
          </div>
          <ul>
            <li>
              <a href="#" onClick={() => this.props.setActiveTab("jobs")}>
                <span className="icon">
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <span className="item">My Jobs</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => this.props.setActiveTab("members")}>
                <span className="icon">
                  <FontAwesomeIcon icon={faDesktop} />
                </span>
                <span className="item">Members</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <FontAwesomeIcon icon={faDesktop} />
                </span>
                <span className="item">Contract Support</span>
              </a>
            </li>
          </ul>
        </div>
        {this.state.isSidebarOpen ? (
          <div className="arrow-left" onClick={this.toggleSidebar}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        ) : (
          <div className="arrow-right" onClick={this.toggleSidebar}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        )}
      </div>
    );
  }
}

export default Sidebar;
