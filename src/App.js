import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';


export const UserContext =createContext()

function App() {
const [loggedInUser,setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
  
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <PrivateRoute path="/:id">
          <Register></Register>
          </PrivateRoute>
          <Route path="/">
          <Home></Home>
          </Route>
        </Switch>
      </Router>
      
    </UserContext.Provider>
  );
}

export default App;
