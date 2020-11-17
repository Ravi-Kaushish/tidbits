import React from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import Auth from '../common/functions/auth';
import { Link, Redirect } from 'react-router-dom';

class NavBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   let isAuthenticated = true
  //   this.state = {
  //     isAuthenticated
  //   }
  //   this.logout = this.logout.bind(this)
  // };

  // componentDidMount() {
  //   var that = this;
  //   let isAuthenticated = Auth.isAuthenticated()
  //   that.setState({
  //     isAuthenticated: isAuthenticated
  //   });
  // };

  // logout() {
  //   var that = this;
  //   Auth.Logout()
  //   var isAuthenticated = Auth.isAuthenticated()
  //   that.setState({
  //     isAuthenticated
  //   });
  // };

  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark" id="NavBar">
        <div className="row col-md-12 col-sm-12 PageControls">
          <Link to='/'>
            <button className="btn btn-dark mr-1">Users</button>
          </Link>
          <Link to='/friends'>
            <button className="btn btn-dark mr-1">Friends</button>
          </Link>
        </div>
      </div>
    );
  };
};

export default NavBar;