import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';

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
            <a className="linkf"><Link to="/dashboard" className="linkline">
              <div className="tabf">
                <img src={dash} className="icon" alt="" />
                <div className="titlee"> Dashboard</div>
              </div>
              </Link>
            </a>
            <a className="linkf"><Link to="/devices" className="linkline">
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
