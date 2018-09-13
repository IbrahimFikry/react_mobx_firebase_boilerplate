import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class LogoutButton extends React.Component{

  _logout = () => {
    console.log();
    this.props.mobx_auth.setCheck(false);
  }


  render(){
    return(
      <button onClick={this._logout}>Logout</button>
    )
  }
}
LogoutButton = inject('mobx_auth')(observer(LogoutButton))

export default LogoutButton;
