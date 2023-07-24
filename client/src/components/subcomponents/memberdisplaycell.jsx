import React from 'react';
import "./csssubcomponents/jobdisplaycell.css"


function Memberdisplaycell({id,name,rank,showRemove}){

  async function removeMember(id) {
    const res = await fetch('http://127.0.0.1:5000/api/remove_client', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientId: id
      })
    });

    if (res.status == 200) {
      alert('Member deleted successfully');
    } else {
      // console.log(data.clients)
      alert('Error while deleting member');

    }

  }
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
        <a href="#">&nbsp;&nbsp;</a>

        {showRemove && 
          <a className="viewdetails" onClick={()=>removeMember(id)}>
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