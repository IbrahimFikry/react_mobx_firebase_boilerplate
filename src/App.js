// import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Switch, Route, Router, Redirect } from 'react-router'
// import './App.css';
// import createBrowserHistory from 'history/createBrowserHistory'
// import { inject, observer, Provider } from 'mobx-react';

// import stores from './stores';
//
// import Dashboard2 from './page/DashboardPage.js';
//
// import LogOut from './components/LogoutButton.js';

// const history = createBrowserHistory()

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login/index.js";
import SignUp from "./SignUp/index.js";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
  );
};

export default App;


// class Dashboard extends React.Component{
//   constructor(props){
//     super(props);
//   }
//
//   render() {
//     return(
//       <div>
//         Dashboard
//         <LogOut/>
//       </div>
//     )
//   }
// }
//
// class About extends React.Component{
//   render() {
//     return(
//       <div>
//       About
//       </div>
//     )
//   }
// }
// class User extends React.Component{
//   render() {
//     return(
//       <div>
//       user
//       </div>
//     )
//   }
// }
//
// class NoMatch extends React.Component{
//   render() {
//     return(
//       <div>
//       Error 404
//       </div>
//     )
//   }
// }
//
// class LoginPage extends React.Component{
//   _login = () => {
//     console.log("Logging in");
//   }
//
//   _skip = () => {
//     console.log("skip");
//     this.props.mobx_auth.setCheck(true);
//     render => {return (<Redirect to='/about'/>)};
//   }
//
//
//   render() {
//     return(
//       <div>
//         <div>
//           <div>
//           Email:
//           <input placeholder="Email"/>
//           </div>
//           <div>
//           Password:
//           <input placeholder="Password"/>
//           </div>
//
//           <button onClick={this._login}>Submit</button>
//           <button onClick={this._skip}>Skip Auth</button>
//         </div>
//
//       </div>
//     )
//   }
// }
// LoginPage = inject('mobx_auth')(observer(LoginPage))
//
// class LoggedIn extends React.Component{
//   render(){
//     return(
//       <Router history={history}>
//         <Switch>
//           <Route exact path="/" component={Dashboard2}/>
//           <Route path="/dashboard" component={Dashboard}/>
//           <Route path="/login" component={LoginPage}/>
//           <Route path="/about" component={About}/>
//           <Route path="/user/:hmm" component={User}/>
//           <Route component={NoMatch}/>
//         </Switch>
//       </Router>
//     )
//   }
// }
// class NotLogged extends React.Component{
//   render(){
//     return(
//       <Router history={history}>
//         <Switch>
//           <Route exact path="/" component={LoginPage}/>
//           <Route component={NoMatch}/>
//         </Switch>
//       </Router>
//     )
//   }
// }
// class LoadingStackNav extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//
//     if(this.props.mobx_auth.check === true){
//       return (<LoggedIn/>)
//     }
//     if(this.props.mobx_auth.check === false) {
//       return (<NotLogged/>)
//     }
//   }
// }
// LoadingStackNav = inject('mobx_auth')(observer(LoadingStackNav))
//
// class Root extends Component {
//   render() {
//     return (
//       <Provider {...stores}>
//         <LoadingStackNav/>
//       </Provider>
//     );
//   }
// }
//
// export default Root;



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
