import React from 'react';
// import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './friends.css';
// import Auth from '../common/functions/auth';
// import CallApi from '../common/functions/CallApi';

//Endpoint must come from setting file


// import {  BASE_URL,  GetFriends } from '../common/constants/ApiEndPoints';
// import FriendsCard from '../components/friendscard';

class Friends extends React.Component {
  // constructor(props) {
  //   super(props);
  //   let isAuthenticated = true
  //   this.state = {
  //     friends: [],
  //     isAuthenticated
  //   }
  // };

  // calling API To get list of friends

  // componentDidMount() {
  //   // var that = this;
  //   // let isAuthenticated = Auth.isAuthenticated()
  //   // if (isAuthenticated) {
  //     CallApi.GetAsync(BASE_URL + GetFriends)
  //       .then((res) => {
  //         if (res.status === 200) {
  //           this.setState({
  //             products: res.data.data
  //           });
  //         }
  //         else if (res.status === 401) {
  //           console.log(res.data.message.message);
  //         }
  //         else if (res.status === 500) {
  //           console.log(res.data.message);
  //         }
  //       })
  //   // }
  //   // else {
  //   //   this.setState({
  //   //     isAuthenticated: isAuthenticated
  //   //   });
  //   // }
  // }
  render() {
    // if (this.state.isAuthenticated === false) {
    //   return <Redirect to="/login" />
    // }
    return (
      <div className="MainContainer">
        <h1>We will be populating users here</h1>

        {/* Calling components here */}

        {/* {this.state.products.map((product, key) => (
              <FriendsCard
                key={product.id}
                Name={product.name}
                CustomerPrice={product.retailprice}
                Quantity={product.quantity}
                Category={product.category}
                Brand={product.brand}
                ProductCode={product.productcode}
              />
            ))} */}
      </div>
    );
  };
};

export default Friends;