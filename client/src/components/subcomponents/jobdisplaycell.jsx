import React from 'react';
import "./csssubcomponents/jobdisplaycell.css"


import { useNavigate } from "react-router-dom";

function JobDisplaycell({ job, showRemove }) {

  const { id, title, type, status } = job;
  const navigate = useNavigate();

  function editClicked() {
    navigate('/edit-job', { state: { job } });
  }

  function detailsClicked() {
    var str = '/jobinfo/' + id
    navigate(str)
  }

  return (
    <div className='cell'>
      <ul>
        <li>
          {/* <p className="commonitems active">{this.props.title} </p> */}
          <a className="commonitems active">
            {title}
          </a>
        </li>
        <li>
          <a className="commonitems">
            {type}
          </a>
        </li>


      </ul>
      <a onClick={() => detailsClicked()} className="editt">
        View Details
      </a>
      {showRemove &&
        <a onClick={() => editClicked()} className="viewdetails">
          Edit
        </a>
      }
    </div>
  )
}
// class JobDisplaycell extends Component {
//     state = {  } 


//     render() { 
//         return (
//             <div className='cell'>
//           <ul>
//             <li>
//               {/* <p className="commonitems active">{this.props.title} </p> */}
//               <a onClick={() => this.props.onnavclick("home")} className="commonitems active" href="#">
//               {this.props.title}
//               </a>
//             </li>
//             <li>
//               <a onClick={() => this.props.onnavclick("services")} className="commonitems" href="#">
//               {this.props.Dateposted}
//               </a>
//             </li>


//           </ul>
//           <a onClick={() => this.props.onnavclick("contractus")} className="editt" href="#">
//           View Details
//           </a>

//           <a onClick={() => this.props.onnavclick("signup")} className="viewdetails" href="#">
//             Edit
//           </a>
//         </div>
//             );
//     }
// }

export default JobDisplaycell;