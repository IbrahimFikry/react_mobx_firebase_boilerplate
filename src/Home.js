import React from "react";
import app from "./base";

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
        <button onClick={this._logout}>Logout</button>
      </div>
    )
  }
}

export default Home
