import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route, Router, Redirect } from 'react-router'
import './App.css';
import createBrowserHistory from 'history/createBrowserHistory'
import { inject, observer, Provider } from 'mobx-react';

import stores from './stores';

const history = createBrowserHistory()

class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }

  _logout = () => {
    // console.log();
    this.props.mobx_auth.setCheck(false);
  }


  render() {
    return(
      <div>
        Dashboard
        <button onClick={this._logout}>Logout</button>
      </div>
    )
  }
}
Dashboard = inject('mobx_auth')(observer(Dashboard))

class About extends React.Component{
  render() {
    return(
      <div>
      About
      </div>
    )
  }
}
class User extends React.Component{
  render() {
    return(
      <div>
      user
      </div>
    )
  }
}

class NoMatch extends React.Component{
  render() {
    return(
      <div>
      404
      </div>
    )
  }
}

class LoginPage extends React.Component{
  _login = () => {
    console.log("Logging in");
  }

  _skip = () => {
    console.log();
    this.props.mobx_auth.setCheck(true);
  }


  render() {
    return(
      <div>
        <div>
        Press to login
        </div>
        <div>
          <button onClick={this._login}>Submit</button>
          <button onClick={this._skip}>Skip Auth</button>
        </div>

      </div>
    )
  }
}
LoginPage = inject('mobx_auth')(observer(LoginPage))

class LoggedIn extends React.Component{
  render(){
    return(
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/about" component={About}/>
          <Route path="/user/:hmm" component={User}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    )
  }
}
class NotLogged extends React.Component{
  render(){
    return(
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    )
  }
}
class LoadingStackNav extends React.Component{
  constructor(props){
    super(props);
  }
  render(){

    if(this.props.mobx_auth.check === true){
      return (<LoggedIn/>)
    }
    if(this.props.mobx_auth.check === false) {
      return (<NotLogged/>)
    }
  }
}
LoadingStackNav = inject('mobx_auth')(observer(LoadingStackNav))

class Root extends Component {
  render() {
    return (
      <Provider {...stores}>
        <LoadingStackNav/>
      </Provider>
    );
  }
}

export default Root;



// <Router history={history}>
//   <Switch>
//     <Route exact path="/" component={LoadingStackNav}/>
//     <Route path="/home" component={Home}/>
//     <Route path="/login" component={LoginPage}/>
//     <Route path="/about" component={About}/>
//     <Route path="/user/:hmm" component={User}/>
//     <Route component={NoMatch}/>
//   </Switch>
// </Router>
