import React, { Component } from "react";
import "./csssubcomponents/sidebardashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDesktop, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import UserContext from "../../context/user";


class Sidebar extends Component {

  static contextType = UserContext; 

  state = {
    isSidebarOpen: false
  };

  toggleSidebar = () => {
    this.setState(prevState => ({
      isSidebarOpen: !prevState.isSidebarOpen
    }));
  };

  render() {
    const { userInfo } = this.context;

    const profilePicPath = userInfo.profilePic.replace(/\\/g, "/");
    const profilePicUrl = `http://localhost:5000/${profilePicPath}`;

    return (
      <div className={`wrapper ${this.state.isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar">
          <div className="profile">
            <img src={profilePicUrl} alt="Arbisoft" />
            <h3>{userInfo.companyName}</h3>
          </div>
          <ul>
            <li>
              <a onClick={this.props.jobClick}>
                <span className="icon">
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <span className="item">My Jobs</span>
              </a>
            </li>
            <li>
              <a onClick={this.props.membersClick}>
                <span className="icon">
                  <FontAwesomeIcon icon={faDesktop} />
                </span>
                <span className="item">Members</span>
              </a>
            </li>
            <li>
              {/* <a href="#">
                <span className="icon">
                  <FontAwesomeIcon icon={faDesktop} />
                </span>
                <span className="item">Contract Support</span>
              </a> */}
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
