import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import { UserContext } from './UserContext';

import Chat from './components/chat/Chat';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';


function App() {
  const [user, setUser] = useState(null);


    useEffect(() => {
      const verifyUser = async () => {
        try {
          const res = await fetch('http://localhost:5000/verifyuser', {
            headers: { 'Content-Type': 'application/json' }
          });
          const data = await res.json();
          setUser(data);
        } catch (error) {
          console.log(error)
        }
  
  
      }
      verifyUser()
  
  
    }, [])
  
  /*   */
  return (
    <Router>

      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/chat/:room_id/:room_name" component={Chat}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
