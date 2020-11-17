import React from 'react';
import './friendscard.css';
import 'bootstrap/dist/css/bootstrap.css';

class FriendsCard extends React.Component {
  render() {
    return (
      <div className="ProductCardMainContainer">
        <div className="pp-pc-header">
          <span className="col-md-2 col-sm-2 pc-headeritem">Name</span>
          <span className="col-md-2 col-sm-2 pc-headeritem">Email</span>
        </div>
        <div className="pp-pc-body">
          <span className="col-md-2 col-sm-2 pc-bodyitem">{this.props.Name}</span>
          <span className="col-md-2 col-sm-2 pc-bodyitem">{this.props.email}</span>
        </div>
      </div>
    );
  };
};

export default FriendsCard;