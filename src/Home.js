import React from "react";
import app from "./value";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends React.Component{

  _logout = () => {
    console.log();
    app.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("Sign out successful");
    }).catch(function(error) {
      // An error happened.
    });
  }


  render(){
    return(
      <div>
        <h1>Home</h1>
        <p>Maybe put some tutorial here about infonomics and ade butang skip</p>
        <Link to="/dashboard"><button>Skip</button></Link>
        <button onClick={this._logout}>Logout</button>
      </div>
    )
  }
}

export default Home
