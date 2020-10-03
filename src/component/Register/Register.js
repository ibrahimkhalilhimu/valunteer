import React, { useContext,useState } from 'react';
import logo from '../../logos/Group 1329.png'
import { Link,useParams } from 'react-router-dom';
import './Register.css'
import { UserContext } from '../../App';
import FakeData from '../../FakeData/FakeData'



const Register = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    let {id} = useParams();
    const dataText = FakeData.find(data=>data.id ==id)
    const [homeData,setHomeData]= useState(dataText)

    return (
        <div className="text-center">
        <Link to="home" > <img src={logo} alt=""/> </Link>
          <div className="py-4">
              <div className="box-text m-auto">
              <h3>Register as a volunteer</h3>
              <form className="py-3">
              <input type="text" value={loggedInUser.name} placeholder="Full Name"id="input" /><br/><br/>
              <input type="email" value={loggedInUser.email} name="" id="input" placeholder="Username or email"/><br/><br/>
             <input type="datetime" name="" id="input" placeholder="Date"/><br/><br/>
             <input type="text" placeholder="Description"id="input" /><br/><br/>
             <input type="text" placeholder="Organize at the library"id="input" defaultValue={homeData.title} /><br/><br/>
              <input className="registerBtn " type="submit" value="Registration"/><br/><br/>
             
          </form>
              </div>
              </div>
        </div>
    );
};

export default Register;