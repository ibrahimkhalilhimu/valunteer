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
import Events from './component/Events/Events';
import Admin from './component/Admin/Admin';


export const UserContext =createContext();

export const UsersContext =createContext()

function App() {
  const [data,setData]= useState({})
const [loggedInUser,setLoggedInUser] = useState({success:false})

  return (
    <UsersContext.Provider value={[data,setData]}>
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <PrivateRoute  path="/event">
           <Events></Events>
         </PrivateRoute>
         <Route path="/admin">
            <Admin></Admin>
          </Route>
          <PrivateRoute path="/:id">
          <Register></Register>
          </PrivateRoute>
         
          <Route exact path="/">
          <Home></Home>
          </Route>
        </Switch>
      </Router>
      
    </UserContext.Provider>
    </UsersContext.Provider>
  );
}

export default App;
