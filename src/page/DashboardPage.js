import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import logop from '../assets/logo.png';
import dash from '../assets/dashboard.png';
import tour from '../assets/tour.png';
import chaf from '../assets/van.png';
import acti from '../assets/act.png';
import users from '../assets/users.png';
import out from '../assets/exit.png';

export default class App extends React.Component{
  render(){
    return(
      <div>
      <div className="boddash">
      <div className="sidebar">
        <div className="namehead">
          <img src={logop} className="dashlogo" alt=""/>
          <a className="subtit"> Infonomics
          </a>
        </div>

        <div className="itemlists">
          <ul className="listgroup">
            <a className="linkf"><Link to="/" className="linkline">
              <div className="tabf">
                <img src={dash} className="icon" alt="" />
                <div className="titlee"> Dashboard</div>
              </div>
              </Link>
            </a>
            <a className="linkf"><Link to="/tour/add" className="linkline">
              <div className="tabf">
                <img src={tour} className="icon" alt="" />
                <div className="titlee"> Devices </div>
              </div>
              </Link>
            </a>
            

          </ul>
        </div>


        <div className="bgImage" />
      </div>
      </div>
      </div>
    )
  }
}

// <a className="linkf">
//   <div className="tabf">
//     <img src={out} className="icon" alt="" />
//
//     <div className="titlee" onClick={() => {
//       firebase.auth().signOut().then(function() {
//         console.log('Successful logout');
//         alert('Successful logout');
//       }).catch(function(error){
//         console.log(error)
//       }
//     )
//   }
//   }>
//       Signout </div>
//   </div>
// </a>
