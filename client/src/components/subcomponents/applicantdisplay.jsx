import React, { Component } from 'react';
import "./csssubcomponents/jobdisplaycell.css"

class   Applicantdisplaycell extends Component {
    state = {  } 
    render() { 
        return ( <div className='cell'>
        <ul>
          <li>
            <a onClick={() => this.props.onnavclick("home")} className="commonitems active" href="#">
            {this.props.id}
            </a>
          </li>
          <li>
            <a onClick={() => this.props.onnavclick("services")} className="commonitems" href="#">
            {this.props.name}
            </a>
          </li>
          <li>
              <a onClick={() => this.props.onnavclick("aboutus")} className="commonitems" href="#">
              Application Rate#{this.props.rate}
              </a>
            </li>
            <li>
              <a onClick={() => this.props.onnavclick("aboutus")} className="commonitems" href="#">
              {this.props.email}
              </a>
            </li>
        </ul>

        
        <a href="#">&nbsp;&nbsp;</a>

        <a onClick={() => this.props.onnavclick("signup")} className="viewdetails" href="#">
        View Profile
        </a>
      </div>    );
    }
}
 
export default Applicantdisplaycell;