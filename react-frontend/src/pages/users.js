import React from 'react';
import './friends.css';
import 'bootstrap/dist/css/bootstrap.css';

class Users extends React.Component {
  // constructor(props) {
  //   super(props);
  //   let isAuthenticated = true
  //   this.state = {
  //     isAuthenticated
  //   }
  // };
  // componentDidMount() {
  //   var that = this;
  //   let isAuthenticated = Auth.isAuthenticated()
  //   that.setState({
  //     isAuthenticated: isAuthenticated
  //   });
  // };

  render() {
    // if (this.state.isAuthenticated === false) {
    //   return <Redirect to="/login" />
    // }
    return (
      <div className="MainContainer">
        <h1>We will be populating users here</h1>
      </div>
    );
  };
};

export default Users;