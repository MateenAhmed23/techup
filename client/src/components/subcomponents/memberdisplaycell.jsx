import React from 'react';
import "./csssubcomponents/jobdisplaycell.css"


function Memberdisplaycell({name,rank,showRemove}){
  return(
    <div className='cell'>
        <ul>
          <li>
            <a className="commonitems active">
            {name.charAt(0).toUpperCase() + name.slice(1)}
            </a>
          </li>
          <li>
            <a className="commonitems">
            {rank.charAt(0).toUpperCase() + rank.slice(1)}
            </a>
          </li>
        </ul>
        <a  className="editt">
        View Details
        </a>
        <a href="#">&nbsp;&nbsp;</a>

        {showRemove && 
          <a className="viewdetails">
          Remove
          </a>
        }
        
      </div>
  )
}
// class Memberdisplaycell extends Component {
//     state = {  } 
//     render() { 
//         return ( <div className='cell'>
//         <ul>
//           <li>
//             <a onClick={() => this.props.onnavclick("home")} className="commonitems active" href="#">
//             {this.props.name}
//             </a>
//           </li>
//           <li>
//             <a onClick={() => this.props.onnavclick("services")} className="commonitems" href="#">
//             {this.props.rank}
//             </a>
//           </li>
//         </ul>
//         <a onClick={() => this.props.onnavclick("contractus")} className="editt" href="#">
//         View Details
//         </a>
//         <a href="#">&nbsp;&nbsp;</a>

//         <a onClick={() => this.props.onnavclick("signup")} className="viewdetails" href="#">
//           Remove
//         </a>
//       </div>    );
//     }
// }
 
export default Memberdisplaycell;