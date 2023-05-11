import React, { Component } from 'react';
import "./csssubcomponents/jobdisplaycell.css"

class Memberdisplaycell extends Component {
    state = {  } 
    render() { 
        return ( <div className='cell'>
        <ul>
          <li>
            <a onClick={() => this.props.onnavclick("home")} className="commonitems active" href="#">
            {this.props.name}
            </a>
          </li>
          <li>
            <a onClick={() => this.props.onnavclick("services")} className="commonitems" href="#">
            {this.props.rank}
            </a>
          </li>
        </ul>
        <a onClick={() => this.props.onnavclick("contractus")} className="editt" href="#">
        View Details
        </a>
        <a href="#">&nbsp;&nbsp;</a>

        <a onClick={() => this.props.onnavclick("signup")} className="viewdetails" href="#">
          Remove
        </a>
      </div>    );
    }
}
 
export default Memberdisplaycell;