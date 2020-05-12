import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';
import { urlencoded } from 'body-parser';

function App() {
  const styleObj = {
    display: 'inline-block',
    align: 'center',
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    padding: '5px',
    margin: '10px',
    backgroundImage:
      'https://cdn0.iconfinder.com/data/icons/network-data-security/49/slice440-512.png',
  };

  return (
    <Router>
      <div style={styleObj} className='App'>
        <h1>Auth Friends App</h1>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friends'>Friends</Link>
          </li>
          <li>
            <Link to='/add'>Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path='/friends' component={Friends} />
          <PrivateRoute path='/add' component={AddFriend} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
