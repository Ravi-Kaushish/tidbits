import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Footer from './components/footer';
import Users from './pages/users.js';
import Friends from './pages/friends.js';
import './index.css';

class MainComponent extends React.Component {
    render() {
        return (
            <div className="">
                <Router>
                    <div className="main-header-container">
                        <Navbar />
                    </div>
                    <div className="main-body-container">
                        <Switch>
                            <Route exact path="/" component={Users} />
                            <Route path="/friends" component={Friends} />
                        </Switch>
                    </div>
                    {/* <div className="main-footer-container">
                        <Footer />
                    </div> */}
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<MainComponent />, document.getElementById('root'));