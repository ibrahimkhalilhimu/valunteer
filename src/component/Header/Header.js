import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png'
import './Header.css'

const Header = () => {
  const [loggedInUser,setLoggedInUser]= useContext(UserContext)
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
  <Link className="navbar-brand" to="home">
      <img src={logo} alt=""/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <Link className="nav-link" id="link-text" to="home">Home <span className="sr-only">(current)</span></Link>
      <Link className="nav-link " id="link-text" to="">Donation</Link>
      <Link className="nav-link" id="link-text" to="event">Events</Link>
      <Link className="nav-link" id="link-text" to="">Blog</Link>
 
    {loggedInUser &&   <Link className="nav-link" to="">{loggedInUser.name}</Link>}
    
   <Link className="nav-link" id="link-text-register" to="">Register</Link>

     <Link className="nav-link" id="link-text-admin" to="admin">Admin</Link>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;