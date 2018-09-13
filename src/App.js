import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route, Router, Redirect } from 'react-router'
import './App.css';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class Home extends React.Component{
  render() {
    return(
      <div>
      Home
      </div>
    )
  }
}
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

  render() {
    return(
      <div>
        <div>
        Press to login
        </div>
        <div>
          <button onClick={this._login}>Submit</button>
        </div>

      </div>
    )
  }
}

class LoadingStackNav extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      check: false,
    }
  }
  render(){

    if(this.state.check === true){
      return (<Redirect to="/home"/>)
    }
    if(this.state.check === false) {
      return (<Redirect to="/login"/>)
    }


    return(
      <div>
        <h1>Its loading boii~~</h1>
      </div>
    );
  }
}


class Root extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LoadingStackNav}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/about" component={About}/>
          <Route path="/user/:hmm" component={User}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    );
  }
}

export default Root;
