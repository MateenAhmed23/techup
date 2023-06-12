import React, { Component } from 'react';
import "./csssubcomponents/jobdisplaycell.css"

class JobDisplaycell extends Component {
    state = {  } 
    render() { 
        return (
            <div className='cell'>
          <ul>
            <li>
              <a onClick={() => this.props.onnavclick("home")} className="commonitems active" href="#">
              {this.props.title}
              </a>
            </li>
            <li>
              <a onClick={() => this.props.onnavclick("services")} className="commonitems" href="#">
              {this.props.Dateposted}
              </a>
            </li>
         
            
          </ul>
          <a onClick={() => this.props.onnavclick("contractus")} className="editt" href="#">
          View Details
          </a>

          <a onClick={() => this.props.onnavclick("signup")} className="viewdetails" href="#">
            Edit
          </a>
        </div>
            );
    }
}
 
export default JobDisplaycell;